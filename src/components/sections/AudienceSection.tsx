import styled from 'styled-components';
import i18n, { tObject, type ListItemContent } from '../../i18n';
import { Container, Section } from '../ui/layout';
import { IntroText, SectionLabel, SectionTitle } from '../ui/typography';

const AudienceGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: clamp(48px, 8vw, 120px);
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const Lead = styled.div`
  position: sticky;
  top: 110px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: static;
  }
`;

const Situations = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.line};
`;

const Situation = styled.article`
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 18px;
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};

  &:last-child {
    border-bottom: 0;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.serif};
    color: ${({ theme }) => theme.colors.muted};
  }

  h3 {
    margin: 0 0 7px;
    font-size: 17px;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.cardText};
  }
`;

export function AudienceSection() {
  const items = tObject<ListItemContent[]>('audience.items');

  return (
    <Section $variant="paper">
      <Container>
        <AudienceGrid>
          <Lead>
            <SectionLabel>{i18n.t('audience.label')}</SectionLabel>
            <SectionTitle>{i18n.t('audience.title')}</SectionTitle>
            <IntroText>{i18n.t('audience.intro')}</IntroText>
          </Lead>
          <Situations>
            {items.map((item, index) => (
              <Situation key={item.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Situation>
            ))}
          </Situations>
        </AudienceGrid>
      </Container>
    </Section>
  );
}
