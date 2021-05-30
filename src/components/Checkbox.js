import React from "react";
import styled from "styled-components";
import { loadingAnimation } from "./Loader";

const CheckboxRoot = styled.label`
  position: relative;
  line-height: 1;
  display: flex;
  align-items: center;
  span {
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
      content: "";
      display: inline-block;
      position: relative;
      height: 12px;
      width: 12px;
      border-radius: 25px;
      border: 2px solid;
      border-color: rgb(72 106 255 / 37%);
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      height: ${({ isChecked }) => (isChecked ? "8px" : "0px")};
      width: ${({ isChecked }) => (isChecked ? "8px" : "0px")};
      border-radius: 25px;
      background: ${({ isLoading }) =>
        isLoading ? "transparent" : "var(--primary-fill)"};
      transition: 0.2s cubic-bezier(0.82, 0.19, 0.74, 1.65);
      transition-delay: 0.05ms;
      transition-property: all;
      opacity: ${({ isChecked }) => (isChecked ? "1" : "0")};
      animation: ${loadingAnimation} 1s linear infinite;
      ${({ isLoading }) =>
        isLoading &&
        `
        height:12px;
        width:12px;
        border-width: 2px;
        border-style: solid;
        border-top-color: transparent;
        border-right-color: var(--primary-fill);
        border-bottom-color: transparent;
        border-left-color: transparent;
    `}
    }
  }
  input {
    display: none;
  }
`;

const Checkbox = (props) => {
  const { children, className, checked, isLoading, ...rest } = props;
  return (
    <CheckboxRoot
      className={className}
      isChecked={checked}
      isLoading={isLoading}
    >
      <input type="checkbox" {...rest} />
      <span></span>
      {children}
    </CheckboxRoot>
  );
};

export default Checkbox;
