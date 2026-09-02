import i18n, { tObject, type ListItemContent } from '../../i18n';
import { Container, Grid2, ItemList, Section } from '../ui/layout';
import { ListItem } from '../ui/ListItem';
import { SectionLabel, SectionTitle } from '../ui/typography';

export function SupportSection() {
  const items = tObject<ListItemContent[]>('support.items');

  return (
    <Section>
      <Container>
        <Grid2>
          <div>
            <SectionLabel>{i18n.t('support.label')}</SectionLabel>
            <SectionTitle>{i18n.t('support.title')}</SectionTitle>
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
