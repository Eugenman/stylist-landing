import i18n from '../../i18n';
import { Container, Section } from '../ui/layout';
import { Caption, SectionLabel, SectionText, SectionTitle } from '../ui/typography';

export function ReviewsSection() {
  return (
    <Section>
      <Container>
        <SectionLabel>{i18n.t('reviews.label')}</SectionLabel>
        <SectionTitle>{i18n.t('reviews.title')}</SectionTitle>
        <SectionText>{i18n.t('reviews.text')}</SectionText>
        <Caption>{i18n.t('reviews.caption')}</Caption>
      </Container>
    </Section>
  );
}
