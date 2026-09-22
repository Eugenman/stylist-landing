import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import styled from 'styled-components';
import i18n, { tObject, type ReviewContent } from '../../i18n';
import { Container, Section } from '../ui/layout';
import { SectionLabel, SectionTitle } from '../ui/typography';

const MOBILE_QUERY = '(max-width: 800px)';
const DRAG_THRESHOLD = 8;
const SWIPE_THRESHOLD = 56;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
  gap: clamp(48px, 8vw, 120px);
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
  }
`;

const ReviewHeading = styled.div`
  min-height: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    min-width: 0;
  }
`;

const ReviewNav = styled.div<{ $dragging?: boolean }>`
  display: grid;
  margin-top: 42px;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    gap: 8px;
    width: calc(100vw - 16px);
    margin-top: 28px;
    padding-right: 16px;
    overflow-x: auto;
    overflow-y: hidden;
    border-top: 0;
    scrollbar-width: none;
    cursor: ${({ $dragging }) => ($dragging ? 'grabbing' : 'grab')};
    touch-action: pan-x;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-x: contain;
    user-select: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ReviewTab = styled.button<{ $active: boolean }>`
  padding: 15px 0;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  background: transparent;
  color: ${({ $active, theme }) => ($active ? theme.colors.ink : theme.colors.muted)};
  font: inherit;
  text-align: left;
  cursor: pointer;

  strong,
  span {
    display: block;
  }

  strong {
    font-size: 14px;
    font-weight: ${({ $active }) => ($active ? 600 : 400)};
  }

  span {
    margin-top: 2px;
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 190px;
    padding: 13px 15px;
    border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.ink : theme.colors.line)};
    border-radius: ${({ theme }) => theme.radii.block};
    cursor: inherit;
    touch-action: pan-x;
  }
`;

const ReviewCard = styled.article`
  display: flex;
  flex-direction: column;
  height: 560px;
  padding: clamp(30px, 5vw, 48px);
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.block};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 0;
    height: 460px;
    touch-action: pan-y;
  }
`;

const ReviewExcerpt = styled.div`
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`;

const ReviewFade = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 92px;
  background: linear-gradient(to top, ${({ theme }) => theme.colors.white} 18%, transparent);
  pointer-events: none;
`;

const ReviewMeta = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 24px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};

  strong {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 21px;
    font-weight: 400;
  }

  span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 13px;
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 4px;

    span {
      text-align: left;
    }
  }
`;

const ReviewText = styled.blockquote`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(19px, 2vw, 24px);
  line-height: 1.42;

  p {
    margin: 0 0 1.2em;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const SourceLink = styled.a`
  display: inline-block;
  flex-shrink: 0;
  margin-top: 18px;
  padding-bottom: 3px;
  border-bottom: 1px solid currentColor;
  color: ${({ theme }) => theme.colors.ink};
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.colors.muted};
  }
`;

function isMobileViewport() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

export function ReviewsSection() {
  const reviews = tObject<ReviewContent[]>('reviews.items');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDraggingNav, setIsDraggingNav] = useState(false);
  const review = reviews[selectedIndex];
  const navRef = useRef<HTMLDivElement>(null);
  const navDrag = useRef({
    active: false,
    pointerId: 0,
    startX: 0,
    startScroll: 0,
    moved: false,
  });
  const cardSwipe = useRef({
    active: false,
    startX: 0,
    startY: 0,
    locked: false as false | 'x' | 'y',
  });
  const skipTabClick = useRef(false);
  const excerptRef = useRef<HTMLDivElement>(null);
  const [isClipped, setIsClipped] = useState(false);

  useLayoutEffect(() => {
    const excerpt = excerptRef.current;
    if (!excerpt) {
      return;
    }

    setIsClipped(excerpt.scrollHeight > excerpt.clientHeight + 4);
  }, [review.sourceHref]);

  useEffect(() => {
    const nav = navRef.current;
    const tab = nav?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (!nav || !tab || !isMobileViewport()) {
      return;
    }

    const left = tab.offsetLeft - (nav.clientWidth - tab.clientWidth) / 2;
    nav.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
  }, [selectedIndex]);

  const selectReview = (index: number) => {
    setSelectedIndex(Math.max(0, Math.min(reviews.length - 1, index)));
  };

  const startNavDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isMobileViewport() || event.button !== 0 || event.pointerType !== 'mouse') {
      return;
    }

    const nav = navRef.current;
    if (!nav) {
      return;
    }

    navDrag.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startScroll: nav.scrollLeft,
      moved: false,
    };
  };

  const moveNavDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = navDrag.current;
    const nav = navRef.current;
    if (!drag.active || !nav) {
      return;
    }

    const delta = event.clientX - drag.startX;
    if (!drag.moved) {
      if (Math.abs(delta) <= DRAG_THRESHOLD) {
        return;
      }

      drag.moved = true;
      skipTabClick.current = true;
      nav.setPointerCapture(event.pointerId);
      setIsDraggingNav(true);
    }

    nav.scrollLeft = drag.startScroll - delta;
  };

  const endNavDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = navDrag.current;
    if (!drag.active) {
      return;
    }

    const nav = navRef.current;
    const wasDrag = drag.moved;
    drag.active = false;
    drag.moved = false;
    setIsDraggingNav(false);

    if (nav?.hasPointerCapture(event.pointerId)) {
      nav.releasePointerCapture(event.pointerId);
    }

    if (wasDrag) {
      return;
    }

    const tab = (event.target as HTMLElement).closest<HTMLElement>('[role="tab"]');
    if (!tab || !nav) {
      return;
    }

    const index = [...nav.querySelectorAll('[role="tab"]')].indexOf(tab);
    if (index >= 0) {
      selectReview(index);
    }
  };

  const handleTabClick = (index: number) => {
    if (skipTabClick.current) {
      skipTabClick.current = false;
      return;
    }

    selectReview(index);
  };

  const startCardSwipe = (event: ReactPointerEvent<HTMLElement>) => {
    if (!isMobileViewport() || (event.target as HTMLElement).closest('a')) {
      return;
    }

    cardSwipe.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      locked: false,
    };
  };

  const moveCardSwipe = (event: ReactPointerEvent<HTMLElement>) => {
    const swipe = cardSwipe.current;
    if (!swipe.active || swipe.locked) {
      return;
    }

    const dx = event.clientX - swipe.startX;
    const dy = event.clientY - swipe.startY;
    if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) {
      return;
    }

    swipe.locked = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
  };

  const endCardSwipe = (event: ReactPointerEvent<HTMLElement>) => {
    const swipe = cardSwipe.current;
    if (!swipe.active) {
      return;
    }

    const dx = event.clientX - swipe.startX;
    const shouldSwitch = swipe.locked === 'x' && Math.abs(dx) >= SWIPE_THRESHOLD;

    cardSwipe.current.active = false;
    cardSwipe.current.locked = false;

    if (!shouldSwitch) {
      return;
    }

    selectReview(selectedIndex + (dx < 0 ? 1 : -1));
  };

  return (
    <Section id="reviews" $variant="paper">
      <Container>
        <ReviewGrid>
          <ReviewHeading>
            <SectionLabel>{i18n.t('reviews.label')}</SectionLabel>
            <SectionTitle>{i18n.t('reviews.title')}</SectionTitle>
            <ReviewNav
              ref={navRef}
              role="tablist"
              aria-label="Отзывы клиентов"
              $dragging={isDraggingNav}
              onPointerDown={startNavDrag}
              onPointerMove={moveNavDrag}
              onPointerUp={endNavDrag}
              onPointerCancel={endNavDrag}
            >
              {reviews.map((item, index) => (
                <ReviewTab
                  key={item.sourceHref}
                  type="button"
                  role="tab"
                  aria-selected={selectedIndex === index}
                  aria-controls="selected-review"
                  $active={selectedIndex === index}
                  onClick={() => handleTabClick(index)}
                >
                  <strong>{item.context}</strong>
                  <span>{item.author}</span>
                </ReviewTab>
              ))}
            </ReviewNav>
          </ReviewHeading>
          <ReviewCard
            key={review.sourceHref}
            id="selected-review"
            role="tabpanel"
            onPointerDown={startCardSwipe}
            onPointerMove={moveCardSwipe}
            onPointerUp={endCardSwipe}
            onPointerCancel={endCardSwipe}
          >
            <ReviewMeta>
              <strong>{review.author}</strong>
              <span>{review.context}</span>
            </ReviewMeta>
            <ReviewExcerpt ref={excerptRef}>
              <ReviewText>
                {review.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </ReviewText>
              {isClipped ? <ReviewFade aria-hidden /> : null}
            </ReviewExcerpt>
            <SourceLink href={review.sourceHref} target="_blank" rel="noreferrer">
              {review.sourceLabel}
            </SourceLink>
          </ReviewCard>
        </ReviewGrid>
      </Container>
    </Section>
  );
}
