import React from "react";
import styled from "styled-components";

export const AvatarRoot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => (size === "lg" ? "85px" : "40px")};
  width: ${({ size }) => (size === "lg" ? "85px" : "40px")};
  border-radius: 100%;
  font-size: ${({ size }) => (size === "lg" ? "45px" : "17px")};
  font-weight: 700;
  color: ${({ color }) => color};

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    border-radius: 25px;
    background: ${({ color }) => color};
    box-shadow: ${({ color }) => `0px 0px 11px ${color}`};
    opacity: 0.2;
  }
`;

const Avatar = ({ color, className = "", size, children }) => {
  return (
    <AvatarRoot color={color} className={className} size={size}>
      {children}
    </AvatarRoot>
  );
};

export default Avatar;
