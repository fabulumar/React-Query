import React from "react";
import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
`;

const loaderInner = keyframes`
  0%{transform: rotate(0deg);}
  100% {transform: rotate(220deg);}
`;

const loaderInnerTwo = keyframes`
  0% {transform: rotate(0deg);}
  50% {transform: rotate(-160deg);}
  100% {transform: rotate(140deg);}
`;

const LoaderRoot = styled.div`
  display: block;
  height: 32px;
  width: 32px;
  animation: ${loadingAnimation} 1s linear infinite;
  margin: auto;
  span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 32px;
    width: 32px;
    clip: rect(0, 32px, 32px, 16px);
    animation: ${loaderInner} 1s linear infinite;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      height: 32px;
      width: 32px;
      clip: rect(0, 32px, 32px, 16px);
      border: 3px solid var(--primary-fill);
      border-radius: 50%;
      box-sizing: border-box;
      animation: ${loaderInnerTwo} 1s ease-in infinite;
    }
  }
`;

const Loader = (props) => {
  const { size, color } = props;
  return (
    <LoaderRoot size={size} color={color}>
      <span />
    </LoaderRoot>
  );
};

export default Loader;
