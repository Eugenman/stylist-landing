import i18n, { tObject, type ContactLinkContent } from '../../i18n';
import { ButtonLink } from '../ui/Button';
import { CenteredContainer, ContactLinks, Section } from '../ui/layout';
import { Caption, IntroText, SectionLabel, SectionTitle } from '../ui/typography';

export function ContactSection() {
  const links = tObject<ContactLinkContent[]>('contact.links');

  return (
    <Section id="contact" $variant="highlight">
      <CenteredContainer>
        <SectionLabel>{i18n.t('contact.label')}</SectionLabel>
        <SectionTitle>{i18n.t('contact.title')}</SectionTitle>
        <IntroText $centered>{i18n.t('contact.intro')}</IntroText>
        <ContactLinks>
          {links.map((link) => (
            <ButtonLink key={link.label} $primary={link.primary} href={link.href}>
              {link.label}
            </ButtonLink>
          ))}
        </ContactLinks>
        <Caption>{i18n.t('contact.caption')}</Caption>
      </CenteredContainer>
    </Section>
  );
}
