import React from "react";
import styled from "styled-components";

const Root = styled.div`
  margin-bottom: 12px;
  border: 1px solid rgb(230 233 238 / 86%);
  padding: 15px;
  border-radius: 4px;
  box-shadow: 2px 3px 7px -3px rgb(52 73 122 / 20%);
  background: #fff;
  transition: 0.2s ease;
  transition-property: background, box-shadow;
  h4 {
    margin: 0px 0px 15px 0px;
  }
  p {
    margin: 0px 0px 5px 0px;
    color: rgb(38 38 38);
    font-size: 15px;
  }
`;

const Card = (props) => {
  const { children, ...rest } = props;
  return <Root {...rest}>{children}</Root>;
};

export default Card;
