import i18n, { tObject, type ListItemContent } from '../../i18n';
import { Container, Grid2, ItemList, Section } from '../ui/layout';
import { ListItem } from '../ui/ListItem';
import { SectionLabel, SectionTitle } from '../ui/typography';

export function ExperienceSection() {
  const items = tObject<ListItemContent[]>('experience.items');

  return (
    <Section id="experience" $variant="paper">
      <Container>
        <Grid2>
          <div>
            <SectionLabel>{i18n.t('experience.label')}</SectionLabel>
            <SectionTitle>{i18n.t('experience.title')}</SectionTitle>
          </div>
          <ItemList>
            {items.map((item) => (
              <ListItem key={item.title} title={item.title} description={item.description} />
            ))}
          </ItemList>
        </Grid2>
      </Container>
    </Section>
  );
}
