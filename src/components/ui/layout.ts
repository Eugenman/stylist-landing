import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: min(1160px, calc(100% - 48px));
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(100% - 32px, 1160px);
  }
`;

export const CenteredContainer = styled(Container)`
  max-width: 800px;
`;

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

type SectionVariant = 'paper' | 'accent' | 'light' | 'highlight' | 'default';

const sectionVariantStyles = {
  paper: css`
    background: ${({ theme }) => theme.colors.paper};
  `,
  accent: css`
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.darkText};
  `,
  light: css`
    background: ${({ theme }) => theme.colors.white};
  `,
  highlight: css`
    background: ${({ theme }) => theme.colors.cream};
    text-align: center;
  `,
  default: css``,
};

export const Section = styled.section<{ $variant?: SectionVariant }>`
  padding: 100px 0;
  ${({ $variant = 'default' }) => sectionVariantStyles[$variant]}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 48px 0;
  }
`;

export const ItemList = styled.div<{ $onAccent?: boolean }>`
  display: grid;
  gap: 0;
  border-top: 1px solid
    ${({ $onAccent, theme }) => ($onAccent ? 'rgba(255, 255, 255, 0.2)' : theme.colors.line)};
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin-top: 45px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 32px;
`;

export const ContactLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 28px;
`;

export const FooterBar = styled.footer`
  padding: 28px 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};
  background: ${({ theme }) => theme.colors.paper};
`;
