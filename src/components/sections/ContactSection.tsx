import i18n, { tObject, type ContactLinkContent } from '../../i18n';
import { SocialLink } from '../ui/Button';
import { ContactLinks, Container, Grid2, Section } from '../ui/layout';
import { IntroText, SectionLabel, SectionTitle } from '../ui/typography';

const icons = {
  telegram: '/icons/telegram.svg',
  vk: '/icons/vk.svg',
} as const;

export function ContactSection() {
  const links = tObject<ContactLinkContent[]>('contact.links');

  return (
    <Section id="contact" $variant="light">
      <Container>
        <Grid2>
          <div>
            <SectionLabel>{i18n.t('contact.label')}</SectionLabel>
            <SectionTitle>{i18n.t('contact.title')}</SectionTitle>
          </div>
          <div>
            <IntroText>{i18n.t('contact.intro')}</IntroText>
            <ContactLinks>
              {links.map((link) => (
                <SocialLink
                  key={link.label}
                  $withLabel={link.showLabel}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  title={link.label}
                >
                  <img
                    src={icons[link.icon]}
                    alt=""
                    width={link.showLabel ? 28 : 48}
                    height={link.showLabel ? 28 : 48}
                  />
                  {link.showLabel ? link.label : null}
                </SocialLink>
              ))}
            </ContactLinks>
          </div>
        </Grid2>
      </Container>
    </Section>
  );
}
