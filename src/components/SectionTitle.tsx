import { FC } from "react";
import styled from "styled-components";
const SectionTitleText = styled("h2")`
  margin: 0;
  font-size:2.3rem;
`;
const SectionTitleNumber = styled("p")`
  color: ${({ theme }) => theme.colors.tertiaryMain};
  margin: 0;
  margin-right:10px;
  letter-spacing: 10px;
  font-size:1.5rem;
  font-weight:700;
`;
const SectionTitleWrapper = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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
