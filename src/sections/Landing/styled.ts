import styled from "styled-components";
import { Container } from "../../components/Container";

export const MainDiv = styled("div")`
  height: 100vh;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ContentDiv = styled("div")``;
export const IntroText = styled("p")`
  color: ${({ theme }) => theme.colors.tertiaryMain};
  margin-bottom: 10px;
`;

export const NameText = styled("h1")`
  font-size: 2.5rem;
  font-weight: 600;
  margin-top: 0;
`;

export const SubText = styled("p")`
  color: ${({ theme }) => theme.colors.secondarySub};
  font-size: 1.5rem;
  margin: 0;
`;

export const SubSubText = styled("p")`
  color: ${({ theme }) => theme.colors.secondarySub};
  font-size: 1.2rem;
  margin: 0;
`;

export const ThinText = styled("span")`
  font-weight: 200;
  margin: 0;
`;

export const ButtonsWrapper = styled("div")`
  display: flex;
  margin-top:20px;
`;