import styled from 'styled-components';

export const Item = styled.div<{ $onAccent?: boolean }>`
  padding: 22px 0;
  border-bottom: 1px solid
    ${({ $onAccent, theme }) => ($onAccent ? 'rgba(255, 255, 255, 0.2)' : theme.colors.line)};

  &:last-child {
    border-bottom: 0;
  }

  strong {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 700;
  }

  span {
    color: ${({ $onAccent, theme }) => ($onAccent ? theme.colors.darkMuted : theme.colors.muted)};
    font-size: 14px;
  }
`;

type ListItemProps = {
  title: string;
  description: string;
  onAccent?: boolean;
};

export function ListItem({ title, description, onAccent }: ListItemProps) {
  return (
    <Item $onAccent={onAccent}>
      <strong>{title}</strong>
      <span>{description}</span>
    </Item>
  );
}
