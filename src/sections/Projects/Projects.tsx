import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Container } from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import {
  ImgAnchorWrapper,
  MainDiv,
  ProjectDetailsWrapper,
  ProjectImg,
  ProjectImgOverlay,
  ProjectImgWrapper,
  ProjectMainDiv,
  ProjectStatusSpan,
  ProjectStatusWrapper,
  ProjectSubTitle,
  ProjectTitle,
  StyledHR,
  SubTitle,
  TagsWrapper,
  TagsWrapperOuter,
  TagsWrapperWrapper,
} from "./styled";
import {
  faFolderClosed,
  faScrewdriverWrench,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { PlainButton, TertiaryButton } from "../../components/Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { TechPill } from "../Journey/styled";

enum ProjectStatus {
  FEATURED = "featured",
  ARCHIVED = "archived",
  UNDERCONSTRUCTION = "underConstruction",
  SERVERNOLONGERDEPLOYED = "serverNoLongerDeployed",
}

enum ProjectType {
  MONOREPO = "Monorepo",
  FRONTENDBACKEND = "Frontend | Backend",
  FRONTENDONLY = "Frontend",
  BACKENDONLY = "Backend",
}

enum Devices {
  DESKTOP = "desktop",
  MOBILE = "mobile",
  TABLET = "tablet",
}

type Project = {
  name: string;
  description: string;
  status: ProjectStatus[];
  type: ProjectType;
  website: string;
  tags: string[];
  imgSrc: string;
  devices: Devices[];
  year: 2020 | 2021 | 2022 | 2023;
  github: {
    url: string;
    type: ProjectType;
  }[];
};

type Projects = Project[];

const projects: Projects = [
  {
    name: "2D SPACE SHOOTER",
    description:
      "Fight your way through infinite rounds and enemies in this classic style shooter.",
    status: [ProjectStatus.ARCHIVED],
    type: ProjectType.FRONTENDONLY,
    website: "https://christopher-alba.github.io/galaga-clone/",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
    imgSrc: "/images/galaga.png",
    devices: [Devices.DESKTOP],
    year: 2020,
    github: [
      {
        url: "https://github.com/christopher-alba/galaga-clone",
        type: ProjectType.FRONTENDONLY,
      },
    ],
  },
  {
    name: "SCIENTIFIC CALCULATOR",
    description:
      "Has the basic functionalities of a calculator as well as some extra features!",
    status: [ProjectStatus.ARCHIVED],
    type: ProjectType.FRONTENDONLY,
    website: "https://christopher-alba.github.io/calculator/",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
    imgSrc: "/images/calculator.png",
    devices: [Devices.DESKTOP, Devices.TABLET, Devices.MOBILE],
    year: 2020,
    github: [
      {
        url: "https://github.com/christopher-alba/calculator",
        type: ProjectType.FRONTENDONLY,
      },
    ],
  },
  {
    name: "PVP CHESS",
    description: "A working chess game with computer assists.",
    status: [ProjectStatus.ARCHIVED],
    type: ProjectType.FRONTENDONLY,
    website: "https://christopher-alba.github.io/chess/",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
    imgSrc: "/images/chess.png",
    devices: [Devices.DESKTOP, Devices.TABLET, Devices.MOBILE],
    year: 2020,
    github: [
      {
        url: "https://github.com/christopher-alba/chess",
        type: ProjectType.FRONTENDONLY,
      },
    ],
  },
  {
    name: "WHACK-A-MOLE",
    description: "Click on the moles as they appear to earn points!",
    status: [ProjectStatus.ARCHIVED],
    type: ProjectType.FRONTENDONLY,
    website:
      "https://christopher-alba.github.io/javascript-carnival/whack-a-mole/whack-a-mole.html",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
    imgSrc: "/images/mole.png",
    devices: [Devices.DESKTOP, Devices.TABLET, Devices.MOBILE],
    year: 2020,
    github: [
      {
        url: "https://github.com/christopher-alba/javascript-carnival",
        type: ProjectType.FRONTENDONLY,
      },
    ],
  },
  {
    name: "E-CommerceV5",
    description:
      "This is a small scale ecommerce site that allows users to browse products and add them to a shopping cart. Admins can create, update, and delete products in the shop route. To access an admin account, login using username: admin, and password: admin. This site also features a light mode theme and dark mode theme, controlled by a switch.",
    status: [ProjectStatus.ARCHIVED, ProjectStatus.SERVERNOLONGERDEPLOYED],
    type: ProjectType.FRONTENDBACKEND,
    website: "https://ecommercev5.netlify.app/",
    tags: [
      "HTML",
      "Styled Components",
      "Javascript",
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "Mongodb",
      "Semantic-UI-React",
      "Other React Libraries",
    ],
    devices: [Devices.DESKTOP, Devices.TABLET, Devices.MOBILE],
    imgSrc: "./images/ecommercev5.png",
    year: 2021,
    github: [
      {
        url: "https://github.com/christopher-alba/ecommerceV5-client",
        type: ProjectType.FRONTENDONLY,
      },
      {
        url: "https://github.com/christopher-alba/ecommerceV5-server",
        type: ProjectType.BACKENDONLY,
      },
    ],
  },
  {
    name: "FINANCIAL MANAGER",
    description:
      "Manage your finances by tracking expenses, incomes, and goals. Login using username: username | password: password",
    website: "https://betterfinance.netlify.app/",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Node.js",
      "Express.js",
      "Graphql",
      "Apollo Server",
      "Apollo Client",
      "MongoDB",
      "Mongoose",
    ],
    status: [ProjectStatus.ARCHIVED, ProjectStatus.SERVERNOLONGERDEPLOYED],
    devices: [Devices.DESKTOP, Devices.TABLET, Devices.MOBILE],
    type: ProjectType.FRONTENDBACKEND,
    imgSrc: "./images/finance.png",
    year: 2022,
    github: [
      {
        url: "https://github.com/christopher-alba/betterfinance-client",
        type: ProjectType.FRONTENDONLY,
      },
      {
        url: "https://github.com/christopher-alba/betterfinance-server",
        type: ProjectType.BACKENDONLY,
      },
    ],
  },
  {
    name: "Unirant",
    description:
      "A website for university students to rant about their life. Register an account with Unirant or log in with your google account to interact with the website's basic features.",
    website: "https://unirant.netlify.app/",
    tags: [
      "HTML",
      "CSS",
      "Typescript",
      "React",
      "Styled Components",
      "Node.js",
      "Express.js",
      "Axios",
      "REST API",
      "MongoDB Atlas",
      "Mongoose",
    ],
    imgSrc: "./images/unirant.png",
    status: [ProjectStatus.UNDERCONSTRUCTION],
    devices: [Devices.DESKTOP, Devices.TABLET, Devices.MOBILE],
    type: ProjectType.FRONTENDBACKEND,
    year: 2022,
    github: [
      {
        url: "https://github.com/christopher-alba/unirant-client",
        type: ProjectType.FRONTENDONLY,
      },
      {
        url: "https://github.com/christopher-alba/unirant-server",
        type: ProjectType.BACKENDONLY,
      },
    ],
  },
];

const Project: FC<{ project: Project }> = ({ project }) => {
  return (
    <ProjectMainDiv>
      <ProjectImgWrapper>
        <ProjectImg src={project.imgSrc} />
        <ProjectImgOverlay />
      </ProjectImgWrapper>

      <ProjectDetailsWrapper>
        <ProjectTitle>
          {project.name} - {project.year}
        </ProjectTitle>
        <ProjectStatusWrapper>
          {project.status.map((status) => {
            let text = "";
            let color = "";
            if (status === ProjectStatus.ARCHIVED) {
              text = "Archived";
              color = "#e6b400";
            } else if (status === ProjectStatus.FEATURED) {
              text = "Featured";
              color = "#00cd00";
            } else if (status === ProjectStatus.SERVERNOLONGERDEPLOYED) {
              text = "Server No Longer Deployed";
              color = "#ec4444";
            } else if (status === ProjectStatus.UNDERCONSTRUCTION) {
              text = "Under Construction";
              color = "#ff9500";
            }
            return (
              <ProjectStatusSpan themeColor={color}>{text}</ProjectStatusSpan>
            );
          })}
        </ProjectStatusWrapper>
        <p>{project.description}</p>
        <a href={project.website} target="_blank" rel="noopener noreferrer">
          <TertiaryButton
            tabIndex={-1}
            style={{ width: "100px", marginRight: "10px", marginTop: "10px" }}
          >
            Visit
          </TertiaryButton>
          {project.github.map((githubObj) => (
            <a href={githubObj.url} target="_blank" rel="noopener noreferrer">
              <PlainButton
                style={{
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ marginRight: "10px" }}
                />
                Github - {githubObj.type}
              </PlainButton>
            </a>
          ))}
        </a>
        <StyledHR />
        <TagsWrapperWrapper>
          <TagsWrapperOuter>
            <ProjectSubTitle>Technologies</ProjectSubTitle>
            <TagsWrapper>
              {project.tags.map((tag) => (
                <TechPill>{tag}</TechPill>
              ))}
            </TagsWrapper>
          </TagsWrapperOuter>
          <TagsWrapperOuter>
            <ProjectSubTitle>Devices</ProjectSubTitle>
            <TagsWrapper>
              {project.devices.map((device) => (
                <TechPill>{device}</TechPill>
              ))}
            </TagsWrapper>
          </TagsWrapperOuter>
        </TagsWrapperWrapper>
      </ProjectDetailsWrapper>
    </ProjectMainDiv>
  );
};

const Projects: FC = () => {
  return (
    <MainDiv id="projects">
      <Container>
        <SectionTitle title="My Personal Projects" number={2} />
        <SubTitle>
          <FontAwesomeIcon
            icon={faScrewdriverWrench}
            style={{ marginRight: "10px", fontSize: "2rem" }}
          />
          Projects I'm Currently Working On
        </SubTitle>
        {projects
          .filter((project) =>
            project.status.includes(ProjectStatus.UNDERCONSTRUCTION)
          )
          .map((project) => {
            return <Project project={project} />;
          })}
        {/* <SubTitle>
          <FontAwesomeIcon
            icon={faThumbsUp}
            style={{ marginRight: "10px", fontSize: "2rem" }}
          />
          Projects I'm Maintaining and Completed to an MVP
        </SubTitle> */}
        {projects
          .filter((project) => project.status.includes(ProjectStatus.FEATURED))
          .map((project) => {
            return <Project project={project} />;
          })}
        <SubTitle>
          <FontAwesomeIcon
            icon={faFolderClosed}
            style={{ marginRight: "10px", fontSize: "2rem" }}
          />
          Projects I'm No Longer Working On
        </SubTitle>
        {projects
          .filter((project) => project.status.includes(ProjectStatus.ARCHIVED))
          .map((project) => {
            return <Project project={project} />;
          })}
      </Container>
    </MainDiv>
  );
};

export default Projects;
