import React from "react";
import styled from "styled-components";

export const TextBoxRoot = styled.input`
  height: 39px;
  width: 100%;
  padding: 5px 14px;
  color: rgb(91 91 91);
  box-sizing: border-box;
  border-radius: 3px;
  font-weight: 500;
  background: rgb(249 250 252);
  border: 1px solid rgb(235 235 235);
  box-shadow: 0px 0px 10px -2px rgb(0 0 0 / 12%);
  transition: 0.2s ease;
  transition-property: background;
  :focus {
    outline: none;
    background: rgb(235 235 235);
  }
  &:hover {
    background: rgb(241 244 248);
  }
`;

const TextBox = (props) => {
  const { ...rest } = props;
  return <TextBoxRoot {...rest} />;
};

export default TextBox;
