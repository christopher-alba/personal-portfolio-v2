import styled from "styled-components";

export const MainDiv = styled("div")`
  padding-top: 100px;
`;

export const SubTitle = styled("h2")`
  font-size: 1.2rem;
  margin-top: 50px;
`;

export const ProjectMainDiv = styled("div")`
  display: block;
  width: 100%;
  margin: 100px 0;
`;

export const ProjectImg = styled("img")`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ProjectImgOverlay = styled("div")`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.tertiaryOverlay};
  position: absolute;
  top: 0;
  left: 0;
  transition: 500ms;
  &:hover {
    opacity: 0;
  }
`;

export const ProjectImgWrapper = styled("div")`
  width: 100%;
  height: 50vh;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
`;

export const ProjectDetailsWrapper = styled("div")`
  width: 100%;
  flex-grow: 1;
  height: auto;
`;

export const ImgAnchorWrapper = styled("a")`
  width: 100%;
  flex-grow: 1;
  height: fit-content;
`;

export const ProjectTitle = styled("p")`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0;
`;

export const ProjectSubTitle = styled("p")`
  font-size: 1.3rem;
  font-weight: 700;
`;

interface ProjectStatusSpanI {
  themeColor: string;
}

export const ProjectStatusSpan = styled("div")<ProjectStatusSpanI>`
  color: ${({ themeColor }) => themeColor};
  border: 2px solid ${({ themeColor }) => themeColor};
  width: fit-content;
  margin-right: 10px;
  margin-top: 10px;
  padding: 5px;
  font-size: 0.7rem;
  border-radius: 10px;
  transition: 200ms;
  display: flex;
  align-items: center;
  &:hover {
    background: ${({ themeColor }) => themeColor};
    color: white;
  }
`;

export const ProjectStatusWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledHR = styled("hr")`
  border-color: ${({ theme }) => theme.colors.secondaryMain};
  margin: 20px 0;
`;

export const TagsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const TagsWrapperWrapper = styled("div")`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TagsWrapperOuter = styled("div")`
  flex-grow: 1;
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
