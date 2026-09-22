import styled from 'styled-components';
import i18n, { tObject, type StatItemContent } from '../../i18n';
import { ButtonLink } from '../ui/Button';
import { ButtonRow } from '../ui/layout';
import { IntroText, Overline, PageTitle } from '../ui/typography';

const Hero = styled.header`
  min-height: calc(100vh - 64px);
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const HeroCopy = styled.div`
  padding: clamp(42px, 7vw, 92px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 48px 24px;
  }
`;

const HeroPhoto = styled.div`
  min-height: 680px;
  background-image: url('/images/hero.jpg');
  background-size: cover;
  background-position: center 25%;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 62vh;
  }
`;

const HeroTitle = styled(PageTitle)`
  max-width: 760px;
  font-size: clamp(45px, 5.7vw, 80px);
`;

const ExperienceNote = styled.p`
  margin: 18px 0 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 14px;
`;

const PhotoCaption = styled.div`
  position: absolute;
  right: 22px;
  bottom: 22px;
  padding: 8px 11px;
  color: ${({ theme }) => theme.colors.white};
  background: color-mix(in srgb, ${({ theme }) => theme.colors.ink} 68%, transparent);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Stats = styled.div`
  display: flex;
  gap: 38px;
  margin-top: 54px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.line};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 22px;
    flex-wrap: wrap;
  }
`;

const Stat = styled.div`
  strong {
    display: block;
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 31px;
    font-weight: 400;
  }

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.muted};
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

export function HeroSection() {
  const stats = tObject<StatItemContent[]>('stats.items');

  return (
    <Hero id="top">
      <HeroCopy>
        <Overline>{i18n.t('hero.overline')}</Overline>
        <HeroTitle>{i18n.t('hero.title')}</HeroTitle>
        <IntroText>{i18n.t('hero.intro')}</IntroText>
        <ExperienceNote>{i18n.t('hero.note')}</ExperienceNote>
        <ButtonRow>
          <ButtonLink $primary href="#contact">
            {i18n.t('hero.buttons.contact')}
          </ButtonLink>
          <ButtonLink href="#process">{i18n.t('hero.buttons.experience')}</ButtonLink>
        </ButtonRow>
        <Stats>
          {stats.map((stat) => (
            <Stat key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Stat>
          ))}
        </Stats>
      </HeroCopy>
      <HeroPhoto role="img" aria-label={i18n.t('hero.photoLabel')}>
        <PhotoCaption>{i18n.t('hero.photoLabel')}</PhotoCaption>
      </HeroPhoto>
    </Hero>
  );
}
