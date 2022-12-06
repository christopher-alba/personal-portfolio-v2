import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { PlainButton } from "../Button";
import { Container } from "../Container";
import { StyledLink } from "../StyledLink";
import { MainDiv, SelfTribute } from "./styled";

const Footer: FC = () => {
  return (
    <MainDiv>
      <Container>
        <SelfTribute>
          <strong>
            This website was made by myself (Christopher Sy Alba).
          </strong>{" "}
          <StyledLink
            href="https://brittanychiang.com/ "
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            Visit the Github repo to fork it and use the theme for your own
            personal website.
          </StyledLink>{" "}
          Please give credit to myself when using it though.
          <StyledLink
            href="https://brittanychiang.com/ "
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            This website was heavily inspired by this personal website
          </StyledLink>{" "}
          made by Brittany Chiang. However, all code used in this website was
          designed and written by myself.
        </SelfTribute>
      </Container>
    </MainDiv>
  );
};

export default Footer;
