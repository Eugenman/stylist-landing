import i18n, { tObject, type TaskItemContent } from '../../i18n';
import { CardGrid, Container, Section } from '../ui/layout';
import { TaskCard } from '../ui/TaskCard';
import { SectionLabel, SectionTitle } from '../ui/typography';

export function CasesSection() {
  const title = tObject<string[]>('cases.title');
  const items = tObject<TaskItemContent[]>('cases.items');

  return (
    <Section id="situations" $variant="light">
      <Container>
        <SectionLabel>{i18n.t('cases.label')}</SectionLabel>
        <SectionTitle>
          {title[0]}
          <br />
          {title[1]}
        </SectionTitle>
        <CardGrid>
          {items.map((item) => (
            <TaskCard
              key={item.label}
              label={item.label}
              title={item.title}
              description={item.description}
            />
          ))}
        </CardGrid>
      </Container>
    </Section>
  );
}
