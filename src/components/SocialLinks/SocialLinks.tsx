import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { MainDiv, IconLinkWrapper } from "./styled";

const SocialLinks: FC = () => {
  return (
    <MainDiv>
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
    </MainDiv>
  );
};
export default SocialLinks;
