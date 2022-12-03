import React, { FC } from "react";
import { PlainButton, TertiaryButton } from "../../components/Button";
import { StyledLink } from "../../components/StyledLink";
import {
  ButtonsWrapper,
  ContentDiv,
  IntroText,
  MainDiv,
  NameText,
  StyledContainer,
  SubSubText,
  SubText,
  ThinText,
} from "./styled";
import { Link } from "react-router-dom";
const Landing: FC = () => {
  return (
    <MainDiv id="landing">
      <StyledContainer>
        <ContentDiv>
          <IntroText>Hi! Thanks for visisting, my name is</IntroText>
          <NameText>Christopher Sy Alba</NameText>
          <SubText>
            <strong>Web Development</strong> <ThinText>specialist</ThinText>
          </SubText>
          <SubSubText>
            <strong>Software Engineer</strong> at{" "}
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.turnersautogroup.co.nz/"
            >
              Turners Automotive Group Digital
            </StyledLink>
          </SubSubText>
          <SubSubText>
            <strong>Computer Systems Engineer Graduate (Honors)</strong> from{" "}
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/computer-systems-engineering/undergraduate.html"
            >
              University of Auckland
            </StyledLink>
          </SubSubText>
          <ButtonsWrapper>
            <Link
              to="./cv.pdf"
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: "10px" }}
            >
              <TertiaryButton tabIndex={-1}>download CV</TertiaryButton>
            </Link>
            <PlainButton>learn more first</PlainButton>
          </ButtonsWrapper>
        </ContentDiv>
      </StyledContainer>
    </MainDiv>
  );
};

export default Landing;
