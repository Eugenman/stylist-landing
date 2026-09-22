import styled from 'styled-components';
import i18n, { tObject, type ListItemContent } from '../../i18n';
import { Container, Grid2, ItemList, Section } from '../ui/layout';
import { ListItem } from '../ui/ListItem';
import { SectionLabel, SectionTitle } from '../ui/typography';

const SkillsGrid = styled(Grid2)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0;
  }
`;

export function SkillsSection() {
  const columns = tObject<ListItemContent[][]>('skills.columns');

  return (
    <Section id="services">
      <Container>
        <SectionLabel>{i18n.t('skills.label')}</SectionLabel>
        <SectionTitle>{i18n.t('skills.title')}</SectionTitle>
        <SkillsGrid>
          {columns.map((column) => (
            <ItemList key={column[0].title}>
              {column.map((item) => (
                <ListItem key={item.title} title={item.title} description={item.description} />
              ))}
            </ItemList>
          ))}
        </SkillsGrid>
      </Container>
    </Section>
  );
}
