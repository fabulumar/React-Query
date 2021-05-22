import React from "react";
import styled from "styled-components";
import errorBg from "../img/404.png";

const ErrorImage = styled.img`
  width: 100%;
  max-width: 200px;
  margin: 10% auto 20px auto;
`;

const ErrorHeading = styled.h2`
  margin: 0px;
  text-align: center;
`;

const ErrorText = styled.p`
  margin: 10px 0 0 0;
  text-align: center;
`;

const ErrorMessage = () => {
  return (
    <>
      <ErrorImage src={errorBg} alt="error background" />
      <ErrorHeading align="center">Something went wrong</ErrorHeading>
      <ErrorText align="center">
        Please check you network connection and try again.
      </ErrorText>
    </>
  );
};

export default ErrorMessage;
