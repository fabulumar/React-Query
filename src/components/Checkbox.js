import React from "react";
import styled from "styled-components";

const CheckboxRoot = styled.label``;

const Checkbox = (props) => {
  const { children, className, ...rest } = props;
  return (
    <CheckboxRoot className={className}>
      <input type="checkbox" {...rest} />
      {children}
    </CheckboxRoot>
  );
};

export default Checkbox;
