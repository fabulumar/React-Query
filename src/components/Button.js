import React from "react";
import styled from "styled-components";

const ButtonRoot = styled.button`
  background: rgb(255 62 0);
  border-radius: 4px;
  margin: 10px auto 10px auto;
  min-width: 300px;
  padding: 12px 25px;
  display: block;
  color: rgb(255 255 255);
  font-weight: 700;
  white-space: nowrap;
  border: none;
  box-shadow: 2px 2px 5px rgb(0 0 0 / 28%);
  transition: 0.2s;
  transition-property: background, color, box-shadow;
  cursor: pointer;
  &:not(:disabled):hover {
    background: rgb(206 54 6);
  }
  &:disabled {
    color: rgb(255 0 0 / 42%);
    background: rgb(255 230 221 / 43%);
    box-shadow: none;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const Button = (props) => {
  const { children, ...rest } = props;
  return <ButtonRoot {...rest}>{children}</ButtonRoot>;
};

export default Button;
