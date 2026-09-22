import i18n, { tObject } from '../../i18n';
import { Container, Grid2, Section } from '../ui/layout';
import { BodyText, HighlightText, SectionLabel } from '../ui/typography';

export function AboutSection() {
  const paragraphs = tObject<string[]>('about.paragraphs');

  return (
    <Section id="approach" $variant="light">
      <Container>
        <Grid2>
          <div>
            <SectionLabel>{i18n.t('about.label')}</SectionLabel>
            <HighlightText>{i18n.t('about.highlight')}</HighlightText>
          </div>
          <div>
            {paragraphs.map((paragraph) => (
              <BodyText key={paragraph.slice(0, 32)}>{paragraph}</BodyText>
            ))}
          </div>
        </Grid2>
      </Container>
    </Section>
  );
}
