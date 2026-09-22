import styled from 'styled-components';

export const ButtonLink = styled.a<{ $primary?: boolean }>`
  display: inline-block;
  padding: 14px 20px;
  border: 1px solid ${({ theme }) => theme.colors.ink};
  border-radius: ${({ theme }) => theme.radii.block};
  font-size: 14px;
  background: ${({ $primary, theme }) => ($primary ? theme.colors.ink : 'transparent')};
  color: ${({ $primary }) => ($primary ? 'white' : 'inherit')};
  transition:
    background 160ms ease,
    color 160ms ease;

  &:hover {
    background: ${({ $primary, theme }) => ($primary ? theme.colors.accent : theme.colors.ink)};
    color: white;
  }
`;

export const SocialLink = styled.a<{ $withLabel?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: ${({ $withLabel }) => ($withLabel ? 'auto' : '48px')};
  height: 48px;
  padding: ${({ $withLabel }) => ($withLabel ? '0 16px 0 12px' : '0')};
  border: ${({ $withLabel, theme }) => ($withLabel ? `1px solid ${theme.colors.ink}` : '0')};
  border-radius: ${({ theme }) => theme.radii.block};
  background: transparent;
  color: ${({ theme }) => theme.colors.ink};
  font-size: 14px;
  line-height: 1;
  transition: opacity 160ms ease;

  img {
    display: block;
    width: ${({ $withLabel }) => ($withLabel ? '28px' : '48px')};
    height: ${({ $withLabel }) => ($withLabel ? '28px' : '48px')};
  }

  &:hover {
    opacity: 0.72;
  }
`;
