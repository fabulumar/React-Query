import React from "react";
import styled from "styled-components";

export const ButtonRoot = styled.button`
  background: var(--primary-fill);
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
    background: var(--primary-hover-fill);
  }
  &:disabled {
    color: var(--primary-disabled-color);
    background: var(--primary-disabled-fill);
    box-shadow: none;
    cursor: not-allowed;
  }
`;

const Button = (props) => {
  const { children, ...rest } = props;
  return <ButtonRoot {...rest}>{children}</ButtonRoot>;
};

export default Button;
