import i18n, { tObject, type ListItemContent } from '../../i18n';
import { Container, Grid2, ItemList, Section } from '../ui/layout';
import { ListItem } from '../ui/ListItem';
import { SectionLabel } from '../ui/typography';

export function SkillsSection() {
  const columns = tObject<ListItemContent[][]>('skills.columns');

  return (
    <Section>
      <Container>
        <SectionLabel>{i18n.t('skills.label')}</SectionLabel>
        <Grid2>
          {columns.map((column) => (
            <ItemList key={column[0].title}>
              {column.map((item) => (
                <ListItem key={item.title} title={item.title} description={item.description} />
              ))}
            </ItemList>
          ))}
        </Grid2>
      </Container>
    </Section>
  );
}
