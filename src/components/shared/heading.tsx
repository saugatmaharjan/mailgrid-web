import React from "react";
import styled from "styled-components";

interface Props {
  level: "one" | "two" | "three";
  bold?: boolean;
}

const Heading: React.FC<Props> = ({ level, bold = true, children }) => {
  let HeadingTag = HeadingOne;
  switch (level) {
    case "two":
      HeadingTag = HeadingTwo;
      break;
    case "three":
      HeadingTag = HeadingThree;
      break;
    default:
      HeadingTag = HeadingOne;
  }

  return <HeadingTag bold={bold}>{children}</HeadingTag>;
};

interface StyledProps {
  bold: boolean;
}

const commonStyles = `
  display: flex;
  aligh-items: center;
`;

const HeadingOne = styled.h1<StyledProps>`
  ${commonStyles};
  font-size: 32px;
`;

const HeadingTwo = styled.h2<StyledProps>`
  ${commonStyles};
  font-size: 24px;
`;

const HeadingThree = styled.h3<StyledProps>`
  ${commonStyles};
  font-size: 16px;
`;

export default Heading;
