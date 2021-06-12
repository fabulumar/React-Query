import React from "react";
import styled from "styled-components";

const Root = styled.div`
  margin-bottom: 12px;
  border: ${({ transparent }) =>
    !transparent && "1px solid rgb(230 233 238 / 86%)"};
  padding: 15px;
  border-radius: 4px;
  box-shadow: ${({ transparent }) =>
    !transparent && "2px 3px 7px -3px rgb(52 73 122 / 20%)"};
  background: ${({ transparent }) => !transparent && "#fff"};
  transition: 0.2s ease;
  transition-property: background, box-shadow;
  width: 100%;
  max-width: ${({ width }) => width};
  margin-right: ${({ centered }) => centered && "auto"};
  margin-left: ${({ centered }) => centered && "auto"};
`;

const Card = (props) => {
  const { children, ...rest } = props;
  return <Root {...rest}>{children}</Root>;
};

export default Card;
