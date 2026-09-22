import styled from 'styled-components';
import { CardLabel, CardText, CardTitle } from './typography';

const Card = styled.article`
  background: ${({ theme }) => theme.colors.paper};
  border-radius: ${({ theme }) => theme.radii.block};
  padding: 34px;
  min-height: 260px;
`;

type TaskCardProps = {
  label: string;
  title: string;
  description: string;
};

export function TaskCard({ label, title, description }: TaskCardProps) {
  return (
    <Card>
      <CardLabel>{label}</CardLabel>
      <CardTitle>{title}</CardTitle>
      <CardText>{description}</CardText>
    </Card>
  );
}
