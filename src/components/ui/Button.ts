import styled from 'styled-components';

export const ButtonLink = styled.a<{ $primary?: boolean }>`
  display: inline-block;
  padding: 14px 20px;
  border: 1px solid ${({ theme }) => theme.colors.ink};
  font-size: 14px;
  background: ${({ $primary, theme }) => ($primary ? theme.colors.ink : 'transparent')};
  color: ${({ $primary }) => ($primary ? 'white' : 'inherit')};
`;
