import React, { FC, ReactNode, useEffect, useState } from "react";
import {
  OptionsDiv,
  MainDiv,
  ContentDiv,
  OptionDiv,
  SelectedOptionDiv,
  OptionSlider,
  OptionsWrapper,
  OptionsSliderBar,
} from "./styled";

export type OptionsAndContents = {
  options: {
    name: string;
    content: ReactNode;
  }[];
};

const SelectAndDisplay: FC<{
  optionsAndContents: OptionsAndContents;
  optionsMinWidth: string;
}> = ({ optionsAndContents, optionsMinWidth }) => {
  const [currentID, setCurrentID] = useState(
    optionsAndContents.options?.[0]?.name
  );
  useEffect(() => {
    const id = optionsAndContents.options.reduce(
      (prev, current) => prev + current.name,
      ""
    );
    const bar = document.getElementById(id) as any;
    const targetElement = document.getElementById(
      optionsAndContents.options.find((option) => option.name === currentID)
        ?.name || ""
    ) as any;

    if (bar && targetElement) {
      bar.style.top = targetElement.offsetTop + "px";
      bar.style.height = targetElement.offsetHeight + "px";
    }
  }, [currentID]);
  const changeID = (ID: string) => {
    setCurrentID(ID);
  };
  return (
    <MainDiv>
      <OptionsDiv minWidth={optionsMinWidth}>
        <OptionSlider>
          <OptionsSliderBar
            id={optionsAndContents?.options?.reduce(
              (prev, current) => prev + current.name,
              ""
            )}
          />
        </OptionSlider>
        <OptionsWrapper>
          {optionsAndContents?.options?.map((option) => {
            if (option.name === currentID) {
              return (
                <SelectedOptionDiv
                  id={option.name}
                  onClick={() => {
                    changeID(option.name);
                  }}
                >
                  {option.name}
                </SelectedOptionDiv>
              );
            } else {
              return (
                <OptionDiv
                  tabIndex={0}
                  id={option.name}
                  onClick={() => {
                    changeID(option.name);
                  }}
                >
                  {option.name}
                </OptionDiv>
              );
            }
          })}
        </OptionsWrapper>
      </OptionsDiv>
      <ContentDiv>
        {
          optionsAndContents?.options?.find(
            (option) => option.name === currentID
          )?.content
        }
      </ContentDiv>
    </MainDiv>
  );
};

export default SelectAndDisplay;
