import styled from 'styled-components';

export const Overline = styled.div`
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 24px;
`;

export const SectionLabel = styled.div<{ $onAccent?: boolean }>`
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ $onAccent, theme }) => ($onAccent ? theme.colors.darkMuted : theme.colors.muted)};
  margin-bottom: 18px;
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: clamp(48px, 6.4vw, 88px);
  line-height: 0.95;
  margin: 0 0 28px;
  letter-spacing: -0.04em;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(34px, 4vw, 54px);
  line-height: 1.02;
  font-weight: 400;
  margin: 0 0 24px;
  letter-spacing: -0.03em;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 10px;
`;

export const IntroText = styled.p<{ $centered?: boolean }>`
  font-size: 20px;
  max-width: 610px;
  color: ${({ theme }) => theme.colors.lead};
  margin: ${({ $centered }) => ($centered ? '0 auto' : '0')};
`;

export const HighlightText = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(26px, 3vw, 40px);
  line-height: 1.15;
  margin: 0;
`;

export const QuoteText = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(30px, 4vw, 52px);
  line-height: 1.08;
  max-width: 850px;
  margin: 0;
`;

export const Caption = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.muted};
  margin-top: 20px;
`;

export const BodyText = styled.p`
  margin: 0 0 1em;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionText = styled.p`
  max-width: 700px;
  margin: 0;
`;

export const CardLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 45px;
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.cardText};
  margin: 0;
`;
