import { FC } from "react";
import styled from "styled-components";

export const MainDiv = styled("div")`
  display: flex;
  align-items: center;
  margin: 100px 0;
`;

const StyledImg = styled("img")`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  border-radius: 50%;
`;
const ImgBackdrop = styled("div")`
  border: 2px solid ${({ theme }) => theme.colors.tertiaryMain};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 0;
  border-radius: 50%;
`;
const ImgWrapper = styled("div")`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const ProfilePicture: FC<{ imgURL: string }> = ({ imgURL }) => {
  return (
    <ImgWrapper>
      <StyledImg src={imgURL} />
      <ImgBackdrop />
    </ImgWrapper>
  );
};

export const Text = styled("p")``;
export const Emphasise = styled("span")`
  color: ${({ theme }) => theme.colors.tertiaryMain};
`;
