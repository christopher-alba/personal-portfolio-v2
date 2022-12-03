import styled from "styled-components";

export const MainDiv = styled("div")`
  padding: 100px 0;
`;

export const ContentMainDiv = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled("h1")`
  margin: 0;
  font-size: 1.3rem;
`;

export const StyledAnchor = styled("a")`
  text-decoration: none;
`;

export const HeaderDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width:800px){
    margin-bottom:20px;
  }
`;

export const Date = styled("p")`
  margin-top: 0;
`;

export const StyledHR = styled("hr")`
  border-color: ${({ theme }) => theme.colors.secondarySub};
  width: 100%;
  margin: 20px 0;
`;

export const SubTitle = styled("h2")`
  font-size: 1.1rem;
`;

export const TechWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const TechPill = styled("div")`
  font-size:0.8rem;
  background: ${({ theme }) => theme.colors.tertiaryMain};
  color: ${({ theme }) => theme.colors.primaryMain};
  padding:5px 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius:5px;
`;
