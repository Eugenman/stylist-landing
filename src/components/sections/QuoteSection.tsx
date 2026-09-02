import styled from 'styled-components';
import i18n from '../../i18n';
import { QuoteText } from '../ui/typography';

const SplitLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 620px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Portrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ContentPanel = styled.div`
  padding: clamp(40px, 7vw, 90px);
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.cream};
`;

export function QuoteSection() {
  return (
    <SplitLayout>
      <Portrait src="/images/portrait.jpg" alt={i18n.t('hero.portraitAlt')} />
      <ContentPanel>
        <QuoteText>{i18n.t('hero.quote')}</QuoteText>
      </ContentPanel>
    </SplitLayout>
  );
}
