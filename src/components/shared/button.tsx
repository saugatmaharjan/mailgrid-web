import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface Props {
  disabled: boolean;
  onClick: () => void;
  varient: "primary" | "default" | "warning" | "error";
  size?: "small" | "normal" | "medium" | "large";
}

const Button: React.FC<Props & HTMLAttributes<HTMLButtonElement>> = ({
  children,
  varient = "default",
  size = "normal",
  ...props
}) => {
  return (
    <StyledButton size={size} varient={varient} {...props}>
      {children}
    </StyledButton>
  );
};

interface StyledProps {
  varient: string;
  size: string;
}

const StyledButton = styled.button<StyledProps>`
  min-width: 80px;
  height: ${props => props.theme.sizeVarients[props.size]};
  padding: 4px 16px;
  background-color: ${props => props.theme.colorVarients[props.varient]};
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Button;
