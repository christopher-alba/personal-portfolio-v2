import styled from "styled-components";

export const NavbarWrapper = styled("div")`
  position: sticky;
  top: 0;
  transition: 500ms;
`;

export const MainDiv = styled("div")`
  height: auto;
  background: ${({ theme }) => theme.colors.primaryMain};
  padding: 30px 30px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1300px) {
    padding: 10px;
  }
`;

export const Brand = styled("button")`
  color: ${({ theme }) => theme.colors.tertiaryMain};
  letter-spacing: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  font-family: "Courier";
  cursor: pointer;
`;

export const RightDiv = styled("div")`
  display: flex;
  align-items: center;
`;

export const SectionButtonsWrapper = styled("div")`
  display: flex;
  align-items: center;
  @media (max-width: 1300px) {
    display: none;
  }
`;

export const SectionButton = styled("button")`
  color: ${({ theme }) => theme.colors.secondaryMain};
  letter-spacing: 5px;
  background: none;
  border: none;
  font-size: 0.8rem;
  font-family: "Courier";
  cursor: pointer;
  margin-right: 30px;
  &:hover {
    color: ${({ theme }) => theme.colors.tertiaryHover};
  }
  @media (max-width: 1300px) {
    margin-right: 0;
    width: fit-content;
  }
`;

export const ToggleThemeButton = styled("button")`
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

export const MenuButton = styled("button")`
  display: none;
  background: none;
  color: ${({ theme }) => theme.colors.tertiaryMain};
  border: 2px solid ${({ theme }) => theme.colors.tertiaryMain};
  padding: 10px 15px;
  border-radius: 10px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.tertiaryHover};
    color: ${({ theme }) => theme.colors.primaryMain};
  }
  @media (max-width: 1300px) {
    display: block;
  }
`;

export const MenuMain = styled("div")`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;
