import styled from "styled-components";

export const MainDiv = styled("div")`
  display: flex;
  margin-top: 100px;
`;

export const OptionsDiv = styled("div")`
  flex-shrink: 1;
  padding-right: 50px;
  position: relative;
  display: flex;
`;
export const OptionsWrapper = styled("div")``;
export const ContentDiv = styled("div")`
  flex-grow: 1;
`;

export const OptionDiv = styled("div")`
  padding: 20px;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
export const SelectedOptionDiv = styled("div")`
  padding: 20px;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors.tertiaryMain};
`;

export const OptionSlider = styled("div")`
  position: relative;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: ${({ theme }) => theme.colors.primarySub};
`;

export const OptionsSliderBar = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.tertiaryMain};
  transition: 500ms;
`;
