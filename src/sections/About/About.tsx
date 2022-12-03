import React, { FC } from "react";
import { Container } from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { Emphasise, MainDiv, ProfilePicture, Text } from "./styled";

const About: FC = () => {
  return (
    <MainDiv id="about">
      <Container>
        <ProfilePicture imgURL="./profileImage.png" />
        <SectionTitle number={0} title="About me" />
        <Text>
          From a young age I’ve enjoyed design and problem solving. Fast forward
          to the present, and I’m applying my creativity in software development
          or engineering.{" "}
          <Emphasise>
            My career path is currently in web development, and I have a
            preference towards frontend development.
          </Emphasise>{" "}
          This is due to my appreciation for the user experience. However, the
          backend also allows me to use my creativity to come up with
          solutions.Therefore,{" "}
          <Emphasise>
            I am also open to working in the backend or fullstack roles.
          </Emphasise>
        </Text>
      </Container>
    </MainDiv>
  );
};
export default About;
