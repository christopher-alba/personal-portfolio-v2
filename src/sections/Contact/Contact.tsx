import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { TertiaryButton } from "../../components/Button";
import { Container } from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { StyledHR, TechPill, TechWrapper } from "../Journey/styled";
import {
  IconLinkWrapper,
  MainDiv,
  SocialDiv,
  StyledDiv,
  StyledLink,
  StyledSpan,
} from "./styled";

const Contact: FC = () => {
  const allTechnologies = [
    "HTML",
    "CSS",
    "Javascript",
    "jQuery",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MongoDB Atlas",
    "Mongoose",
    "Styled Components",
    "Cypress",
    "Jest",
    "Axios",
    "GraphQL",
    "Apollo Client",
    "Apollo Server",
    "REST APIs",
    "Storybook",
    "Java",
    "Cucumber",
    "Playwright",
    "C#",
    ".NET",
    "Blazor",
    "Unity",
    "Blender",
    "Figma",
  ];
  return (
    <MainDiv id="contact">
      <Container>
        <SectionTitle title="Looking for a Software Engineer?" number={4} />
        <p>
          <StyledSpan>I'm not currently looking</StyledSpan> for any new
          opportunities in software engineering. However, if you really want to
          have a chat, feel free to contact me and I'll entertain your call,
          email or message.
        </p>
        <p>Find the information you need to contact me in my CV.</p>
        <StyledDiv>
          <StyledLink to="./cv.pdf" download target="_blank" rel="noreferrer">
            <TertiaryButton tabIndex={-1}>Download CV</TertiaryButton>
          </StyledLink>
          <SocialDiv>
            <IconLinkWrapper
              href="https://github.com/christopher-alba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </IconLinkWrapper>
            <IconLinkWrapper
              href="https://www.linkedin.com/in/christopher-alba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </IconLinkWrapper>
            <IconLinkWrapper
              href="https://www.instagram.com/alba.sy.chris/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </IconLinkWrapper>
            <IconLinkWrapper
              href="https://www.facebook.com/christopher.alba.357/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </IconLinkWrapper>
          </SocialDiv>
        </StyledDiv>

        <StyledHR />
        <h2>Recently Used Technologies</h2>
        <TechWrapper>
          {allTechnologies.map((tech) => {
            return <TechPill>{tech}</TechPill>;
          })}
        </TechWrapper>
      </Container>
    </MainDiv>
  );
};

export default Contact;
