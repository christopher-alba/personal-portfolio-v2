import styled from "styled-components";
import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

const MainWrapper = styled("div")`
  display: flex;
  margin-bottom: 20px;
`;
const StarDiv = styled("div")`
  flex-shrink: 1;
  padding-right: 20px;
  color: ${({ theme }) => theme.colors.tertiaryMain};
`;
const TextDiv = styled("div")`
  flex-grow: 1;
`;

const BulletPointList: FC<{ icon: IconDefinition; text: string }> = ({
  icon,
  text,
}) => {
  return (
    <MainWrapper>
      <StarDiv>
        <FontAwesomeIcon icon={icon} />
      </StarDiv>
      <TextDiv>{text}</TextDiv>
    </MainWrapper>
  );
};

export default BulletPointList;
