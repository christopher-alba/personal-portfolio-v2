import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useEffect, useState } from "react";
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
} from "./styled";

const Navbar: FC = () => {
  const { width } = useWindowDimensions();
  const [menuOn, setMenuOn] = useState(false);
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        (document.getElementById("navbar") as any).style.top = "0";
      } else {
        (document.getElementById("navbar") as any).style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    };
  });
  const toggleMenu = () => {
    setMenuOn(!menuOn);
  };

  return (
    <div id="navbar">
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
          <ToggleThemeButton>theme</ToggleThemeButton>
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
    </div>
  );
};

export default Navbar;
