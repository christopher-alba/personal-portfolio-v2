import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainDiv = styled("div")`
  margin: 100px 0;
`;

export const SocialDiv = styled("div")`
  @media (min-width: 1300px) {
    display: none;
  }
  font-size: 2.5rem;
  display: flex;
  align-items: center;
`;

export const StyledDiv = styled("div")`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const IconLinkWrapper = styled("a")`
  color: ${({ theme }) => theme.colors.secondarySub};
  &:hover {
    color: ${({ theme }) => theme.colors.tertiaryMain};
  }
  margin-right: 30px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 30px;
  text-decoration: none;
`;

export const StyledSpan = styled("span")`
  font-size: 1.3rem;
  margin-right: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.tertiaryMain};
`;
