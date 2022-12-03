import {
  faBookOpen,
  faCar,
  faDollarSign,
  faGear,
  faStar,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import BulletPointList from "../../components/BulletPointList";
import { TertiaryButton } from "../../components/Button";
import { Container } from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import SelectAndDisplay from "../../components/SelectAndDisplay";
import { OptionsAndContents } from "../../components/SelectAndDisplay/SelectAndDisplay";
import {
  ContentMainDiv,
  ContentTitle,
  Date,
  HeaderDiv,
  MainDiv,
  StyledAnchor,
  StyledHR,
  SubTitle,
  TechPill,
  TechWrapper,
} from "./styled";

const Turners: FC = () => {
  const technologies: string[] = [
    "Cypress",
    "Playwright",
    "Cucumber",
    "Java",
    "Javascript",
    "Typescript",
    "Vue",
    "AWS",
    "JIRA",
    "Bit Bucket",
    "Microsoft Teams",
  ];
  return (
    <ContentMainDiv>
      <HeaderDiv>
        <ContentTitle>Graduate Software Engineer</ContentTitle>
        <StyledAnchor
          href="https://www.turnersautogroup.co.nz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TertiaryButton tabIndex={-1}>Visit Company Website</TertiaryButton>
        </StyledAnchor>
      </HeaderDiv>
      <Date>June 2022 - Present</Date>
      <BulletPointList
        icon={faCar}
        text="I initially joined TAG as a part time software engineer. Initially, I was placed in quality assurance (QA), which involved being part of large testing efforts within multiple of their web applications. My contract was then upgraded to full time once I finished university."
      />
      <BulletPointList
        icon={faCar}
        text="My role at TAG varies as I am being rotated slowly throughout the business. Since I have a passion for frontend development, this is where I hope to end up after my rotation."
      />
      <BulletPointList
        icon={faCar}
        text="At TAG I work with multiple modern technologies in testing. Testing involves writing integration tests for the AWS pipeline , or stand alone automated tests that can be executed any time. For both these types of tests, I also write end to end and component tests."
      />
      <StyledHR />
      <SubTitle>Technologies Used</SubTitle>
      <TechWrapper>
        {technologies.map((tech) => (
          <TechPill>{tech}</TechPill>
        ))}
      </TechWrapper>
    </ContentMainDiv>
  );
};

const Henry: FC = () => {
  const technologies: string[] = [
    "C#",
    "Blazor",
    ".NET",
    "Figma",
    "Microsoft Azure",
    "Microsoft Teams",
  ];
  return (
    <ContentMainDiv>
      <HeaderDiv>
        <ContentTitle>Full-stack Software Developer Intern</ContentTitle>
        <StyledAnchor
          href="https://henryscheinone.co.nz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TertiaryButton tabIndex={-1}>Visit Company Website</TertiaryButton>
        </StyledAnchor>
      </HeaderDiv>
      <Date>November 2021 - February 2022 (400 hours)</Date>
      <BulletPointList
        icon={faTooth}
        text="Designed UX and UI for web applications"
      />
      <BulletPointList
        icon={faTooth}
        text="Implemented UX and UI in Blazor C# web applications"
      />
      <BulletPointList
        icon={faTooth}
        text="Implemented the backend in C# web applications"
      />
      <BulletPointList
        icon={faTooth}
        text="Wrote unit tests for the backend in C# web applications"
      />
      <BulletPointList
        icon={faTooth}
        text="Shared knowledge amongst team members"
      />
      <BulletPointList
        icon={faTooth}
        text="Pair programmed with senior developers"
      />
      <BulletPointList icon={faTooth} text="Worked in an agile environment" />
      <BulletPointList
        icon={faTooth}
        text="Presented my work to a mixed audience (technical & non-technical)"
      />
      <BulletPointList
        icon={faTooth}
        text="Used Microsoft Azure instead of Github for source control"
      />

      <StyledHR />
      <SubTitle>Technologies Used</SubTitle>
      <TechWrapper>
        {technologies.map((tech) => (
          <TechPill>{tech}</TechPill>
        ))}
      </TechWrapper>
    </ContentMainDiv>
  );
};

const Jasper: FC = () => {
  const technologies: string[] = [
    "Javascript",
    "React",
    "Styled Components",
    "Inhouse Design System",
    "Figma",
    "Cypress",
    "Jest",
    "React Testing Library",
    "GraphQL",
    "Apollo",
    "Notion",
    "Linear",
    "Gihub",
  ];
  return (
    <ContentMainDiv>
      <HeaderDiv>
        <ContentTitle>Frontend Software Developer Intern</ContentTitle>
        <StyledAnchor
          href="https://www.jasper.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TertiaryButton tabIndex={-1}>Visit Company Website</TertiaryButton>
        </StyledAnchor>
      </HeaderDiv>
      <Date>November 2020 - February 2021 (416 hours)</Date>
      <BulletPointList
        icon={faDollarSign}
        text=" Implemented UX and UI in React applications"
      />
      <BulletPointList
        icon={faDollarSign}
        text="Wrote automated tests using Jest and Cypress, with React Testing Library"
      />
      <BulletPointList
        icon={faDollarSign}
        text="Communicated with GraphQL APIs through Apollo"
      />
      <BulletPointList
        icon={faDollarSign}
        text="Implemented a polished user interface"
      />
      <BulletPointList
        icon={faDollarSign}
        text="Considered best practice methodology, performance, and accessibility"
      />
      <BulletPointList
        icon={faDollarSign}
        text="Shared knowledge amongst team members"
      />
      <BulletPointList
        icon={faDollarSign}
        text="Wrote documentation on Notion, Linear and GitHub"
      />
      <BulletPointList
        icon={faDollarSign}
        text="Planned out tasks and stories on Linear"
      />
      <BulletPointList
        icon={faDollarSign}
        text="Performed maintenance on existing code base"
      />
      <BulletPointList
        icon={faDollarSign}
        text="Worked in an Agile environment"
      />
      <BulletPointList
        icon={faDollarSign}
        text="Reviewed pull request from other frontend developers"
      />
      <BulletPointList
        icon={faDollarSign}
        text="Pair programmed with my mentor"
      />
      <StyledHR />
      <SubTitle>Technologies Used</SubTitle>
      <TechWrapper>
        {technologies.map((tech) => (
          <TechPill>{tech}</TechPill>
        ))}
      </TechWrapper>
    </ContentMainDiv>
  );
};

const EDA: FC = () => {
  const technologies: string[] = [
    "Javascript",
    "jQuery",
    "React.js",
    "Redux",
    "REST APIs",
    "Jest",
    "Postman",
    "Supertest",
    "Superagent",
    "Passport.js",
    "HTML",
    "CSS",
    "Handlebars",
    "Node.js",
    "Express.js",
    "Knex.js",
    "Github",
    "AdobeXD",
    "Photoshop",
  ];
  return (
    <ContentMainDiv>
      <HeaderDiv>
        <ContentTitle>Full-stack Software Development Bootcamp</ContentTitle>
        <StyledAnchor
          href="https://devacademy.co.nz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TertiaryButton tabIndex={-1}>Visit Company Website</TertiaryButton>
        </StyledAnchor>
      </HeaderDiv>
      <Date>March 2020 - June 2020 (800 hours)</Date>
      <BulletPointList
        icon={faBookOpen}
        text="The work at EDA is designed to turn someone from no experience in software to a full stack web developer in 15 weeks."
      />
      <BulletPointList
        icon={faBookOpen}
        text="My time in EDA has given me plenty of experience working with others in a professional software development environment."
      />
      <BulletPointList
        icon={faBookOpen}
        text="I gained substantial experience working in different roles in different projects from 4 to 20 people in a group. I have been a frontend role dev/team lead , design lead, backend role, and product owner."
      />
      <BulletPointList
        icon={faBookOpen}
        text="I worked with Javascript mainly in the frontend, learning libraries like jQuery and React.js."
      />
      <BulletPointList
        icon={faBookOpen}
        text="I worked with external APIs like Auth0’s authentication and management API’s  to implement secure authentication, and also Stripe’s API for secure transfer of payment."
      />
      <BulletPointList
        icon={faBookOpen}
        text="In the backend, I am very comfortable working with Node.js and Express.js.I use postman to test my routes and am comfortable working with it. 
        I use Knex.js for creating SQL databases.
        "
      />
      <BulletPointList
        icon={faBookOpen}
        text="Pair programming happens at least once a week on small scale projects."
      />
      <BulletPointList
        icon={faBookOpen}
        text="All our activities were version controlled in git and managed in github so I am very comfortable working with git and github."
      />
      <BulletPointList
        icon={faBookOpen}
        text="This course has a heavy emphasis on code quality, so I am familiar in creating unit tests which are isolated to ensure things are being tested precisely."
      />

      <StyledHR />
      <SubTitle>Technologies Used</SubTitle>
      <TechWrapper>
        {technologies.map((tech) => (
          <TechPill>{tech}</TechPill>
        ))}
      </TechWrapper>
    </ContentMainDiv>
  );
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
    <MainDiv id="journey">
      <Container>
        <SectionTitle number={1} title="My Journey in Tech" />
        <SelectAndDisplay optionsAndContents={selectOptions} />
      </Container>
    </MainDiv>
  );
};

export default Journey;
