import styled from 'styled-components';
import i18n, { tObject, type NavigationLinkContent } from '../../i18n';
import { Container } from '../ui/layout';

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, ${({ theme }) => theme.colors.white} 92%, transparent);
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  backdrop-filter: blur(12px);
`;

const Navigation = styled(Container)`
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
`;

const Name = styled.a`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 19px;
  white-space: nowrap;
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: auto;

  a {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.muted};
    transition: color 160ms ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.ink};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const ContactLink = styled.a`
  padding: 9px 15px;
  border: 1px solid ${({ theme }) => theme.colors.ink};
  border-radius: ${({ theme }) => theme.radii.block};
  font-size: 13px;
  line-height: 1;
`;

export function Header() {
  const links = tObject<NavigationLinkContent[]>('navigation.links');

  return (
    <Bar>
      <Navigation>
        <Name href="#top">{i18n.t('navigation.name')}</Name>
        <Links aria-label="Основная навигация">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </Links>
        <ContactLink href="#contact">{i18n.t('navigation.contact')}</ContactLink>
      </Navigation>
    </Bar>
  );
}
