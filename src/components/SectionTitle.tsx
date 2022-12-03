import { FC } from "react";
import styled from "styled-components";
const SectionTitleText = styled("h2")`
  margin: 0;
  font-family: "Courier";
`;
const SectionTitleNumber = styled("p")`
  color: ${({ theme }) => theme.colors.tertiaryMain};
  margin: 0;
  margin-right:10px;
  font-family: "Courier";
`;
const SectionTitleWrapper = styled("div")`
  display: flex;
  align-items: center;
`;

const SectionTitle: FC<{
  number: number;
  title: string;
}> = ({ number, title }) => {
  return (
    <SectionTitleWrapper>
      <SectionTitleNumber>{`[${number}]`}</SectionTitleNumber>
      <SectionTitleText>{title}</SectionTitleText>
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
