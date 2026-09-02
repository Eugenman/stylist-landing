import i18n, { tObject, type ListItemContent } from '../../i18n';
import { Container, Grid2, ItemList, Section } from '../ui/layout';
import { ListItem } from '../ui/ListItem';
import { SectionLabel, SectionTitle } from '../ui/typography';

export function ExperienceSection() {
  const items = tObject<ListItemContent[]>('experience.items');

  return (
    <Section $variant="accent">
      <Container>
        <Grid2>
          <div>
            <SectionLabel $onAccent>{i18n.t('experience.label')}</SectionLabel>
            <SectionTitle>{i18n.t('experience.title')}</SectionTitle>
          </div>
          <ItemList $onAccent>
            {items.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                description={item.description}
                onAccent
              />
            ))}
          </ItemList>
        </Grid2>
      </Container>
    </Section>
  );
}
