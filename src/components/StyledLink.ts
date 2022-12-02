import styled from "styled-components";
export const StyledLink = styled("a")`
  color: ${({ theme }) => theme.colors.tertiaryMain};
  position: relative;
  text-decoration: none;
  transition: 500;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.tertiaryMain};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    @media (max-width: 800px) {
      display: none;
    }
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
    @media (max-width: 800px) {
      display: none;
    }
  }
`;
