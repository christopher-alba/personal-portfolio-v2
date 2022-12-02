import styled from "styled-components";

export const PlainButton = styled("button")`
  background: none;
  color: ${({ theme }) => theme.colors.secondaryMain};
  border: 2px solid ${({ theme }) => theme.colors.secondaryMain};
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryHover};
    color: ${({ theme }) => theme.colors.primaryMain};
  }
`;

export const TertiaryButton = styled("button")`
  background: none;
  color: ${({ theme }) => theme.colors.tertiaryMain};
  border: 2px solid ${({ theme }) => theme.colors.tertiaryMain};
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.tertiaryHover};
    color: ${({ theme }) => theme.colors.primaryMain};
  }
`;