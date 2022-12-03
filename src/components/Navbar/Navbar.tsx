import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { DefaultTheme, ThemeContext } from "styled-components";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {
  Brand,
  RightDiv,
  MainDiv,
  SectionButton,
  ToggleThemeButton,
  SectionButtonsWrapper,
  MenuButton,
  MenuMain,
  NavbarWrapper,
} from "./styled";
import themes from "../../themes/schema.json";
const Navbar: FC<{
  setSelectedTheme: Dispatch<SetStateAction<DefaultTheme>>;
}> = ({ setSelectedTheme }) => {
  const { width } = useWindowDimensions();
  const theme = useContext(ThemeContext);
  const [menuOn, setMenuOn] = useState(false);
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        (document.getElementById("navbar") as any).style.top = "0";
      } else {
        (document.getElementById("navbar") as any).style.top = "-200px";
      }
      prevScrollpos = currentScrollPos;
    };
  });
  const toggleMenu = () => {
    setMenuOn(!menuOn);
  };
  const toggleTheme = () => {
    if (theme.name === "light") {
      setSelectedTheme(themes.dark);
    } else {
      setSelectedTheme(themes.light);
    }
  };
  const scrollToLanding = () => {
    document.getElementById("landing")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToJourney = () => {
    document.getElementById("journey")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToEducation = () => {
    document.getElementById("education")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <NavbarWrapper id="navbar">
      <MainDiv>
        <Brand onClick={scrollToLanding}>{"<CSA/>"}</Brand>
        <RightDiv>
          <SectionButtonsWrapper>
            <SectionButton onClick={scrollToAbout}>{"[0]About"}</SectionButton>
            <SectionButton onClick={scrollToJourney}>
              {"[1]Journey"}
            </SectionButton>
            <SectionButton onClick={scrollToProjects}>
              {"[2]Projects"}
            </SectionButton>
            <SectionButton onClick={scrollToEducation}>
              {"[3]Education"}
            </SectionButton>
            <SectionButton onClick={scrollToContact}>
              {"[4]Contact"}
            </SectionButton>
          </SectionButtonsWrapper>
          <ToggleThemeButton onClick={toggleTheme}>theme</ToggleThemeButton>
          <MenuButton onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </MenuButton>
        </RightDiv>
      </MainDiv>
      {menuOn && width <= 1300 && (
        <MenuMain>
          <SectionButton onClick={scrollToAbout}>{"[0]About"}</SectionButton>
          <SectionButton onClick={scrollToJourney}>
            {"[1]Journey"}
          </SectionButton>
          <SectionButton onClick={scrollToProjects}>
            {"[2]Projects"}
          </SectionButton>
          <SectionButton onClick={scrollToEducation}>
            {"[3]Education"}
          </SectionButton>
          <SectionButton onClick={scrollToContact}>
            {"[4]Contact"}
          </SectionButton>
        </MenuMain>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
