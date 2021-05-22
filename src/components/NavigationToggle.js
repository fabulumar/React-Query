import React from "react";
import styled from "styled-components";

const Root = styled.div`
  position: fixed;
  top: 25px;
  left: 25px;
  z-index: 2;

  .icon {
    width: 25px;
    height: 25px;
    position: relative;
    transition: 0.1s;
    cursor: pointer;
    display: inline-block;
    span {
      width: 5px;
      height: 5px;
      background-color: var(--primary-fill);
      display: block;
      border-radius: 50%;
      position: absolute;
      :nth-child(1) {
        left: 0;
        top: 0;
      }
      :nth-child(2) {
        left: 10px;
        top: 0;
      }
      :nth-child(3) {
        right: 0;
        top: 0;
      }
      :nth-child(4) {
        left: 0;
        top: 10px;
      }
      :nth-child(5) {
        position: absolute;
        left: 10px;
        top: 10px;
      }
      :nth-child(6) {
        right: 0px;
        top: 10px;
      }
      :nth-child(7) {
        left: 0px;
        bottom: 0px;
      }
      :nth-child(8) {
        position: absolute;
        left: 10px;
        bottom: 0px;
      }
      :nth-child(9) {
        right: 0px;
        bottom: 0px;
      }
    }
    :hover span {
    }
    &.open {
      transform: rotate(180deg);
      cursor: pointer;
      transition: 0.2s cubic-bezier(0.8, 0.5, 0.2, 1.4);
      span {
        border-radius: 50%;
        transition-delay: 200ms;
        transition: 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
        :nth-child(2) {
          left: 5px;
          top: 5px;
        }
        :nth-child(4) {
          left: 5px;
          top: 15px;
        }
        :nth-child(6) {
          right: 5px;
          top: 5px;
        }
        :nth-child(8) {
          left: 15px;
          bottom: 5px;
        }
      }
    }
  }
`;

const NavigationToggle = ({ onClick, isNavBarOpen }) => {
  return (
    <Root onClick={onClick}>
      <div className={`icon ${isNavBarOpen && "open"}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Root>
  );
};

export default NavigationToggle;
