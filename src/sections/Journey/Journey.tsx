import React, { FC } from "react";
import { Container } from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import SelectAndDisplay from "../../components/SelectAndDisplay";
import { OptionsAndContents } from "../../components/SelectAndDisplay/SelectAndDisplay";
import { MainDiv } from "./styled";

const Turners: FC = () => {
  return <h1>Hello Turners</h1>;
};

const Henry: FC = () => {
  return <h1>Hello Henry</h1>;
};

const Jasper: FC = () => {
  return <h1>Hello Jasper</h1>;
};

const EDA: FC = () => {
  return <h1>Hello EDA</h1>;
};

const selectOptions: OptionsAndContents = {
  options: [
    {
      name: "Turners Automotive Group",
      content: <Turners />,
    },
    {
      name: "Henry Schein One",
      content: <Henry />,
    },
    {
      name: "Jasper",
      content: <Jasper />,
    },
    {
      name: "Enspiral Dev Academy",
      content: <EDA />,
    },
  ],
};

const Journey: FC = () => {
  return (
    <MainDiv>
      <Container>
        <SectionTitle number={1} title="My Journey in Tech" />
        <SelectAndDisplay optionsAndContents={selectOptions} />
      </Container>
    </MainDiv>
  );
};

export default Journey;
