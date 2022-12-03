import styled from "styled-components";

export const MainDiv = styled("div")`
  display: flex;
  flex-direction: column;
  border-right: 2px solid ${({ theme }) => theme.colors.secondarySub};
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 50px;
  font-size: 2rem;
  align-items: center;
  @media (max-width: 1300px) {
    display: none;
  }
`;

export const IconLinkWrapper = styled("a")`
  color: ${({ theme }) => theme.colors.secondarySub};
  &:hover {
    color: ${({ theme }) => theme.colors.tertiaryMain};
  }
  margin-bottom: 30px;
`;
