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
  return (
    <NavbarWrapper id="navbar">
      <MainDiv>
        <Brand>{"<CSA/>"}</Brand>
        <RightDiv>
          <SectionButtonsWrapper>
            <SectionButton>{"[0]About"}</SectionButton>
            <SectionButton>{"[1]Journey"}</SectionButton>
            <SectionButton>{"[2]Projects"}</SectionButton>
            <SectionButton>{"[3]Education"}</SectionButton>
            <SectionButton>{"[4]Contact"}</SectionButton>
          </SectionButtonsWrapper>
          <ToggleThemeButton onClick={toggleTheme}>theme</ToggleThemeButton>
          <MenuButton onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </MenuButton>
        </RightDiv>
      </MainDiv>
      {menuOn && width <= 1300 && (
        <MenuMain>
          <SectionButton>{"[0]About"}</SectionButton>
          <SectionButton>{"[1]Journey"}</SectionButton>
          <SectionButton>{"[2]Projects"}</SectionButton>
          <SectionButton>{"[3]Education"}</SectionButton>
          <SectionButton>{"[4]Contact"}</SectionButton>
        </MenuMain>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
