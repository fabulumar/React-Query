import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import TextBox, { TextBoxRoot } from "./TextBox";

const Root = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  width: 100%;
  box-shadow: 0px 0px 10px -2px rgb(0 0 0 / 12%);
  ${TextBoxRoot} {
    border-radius: 0px 3px 3px 0px;
    box-shadow: none;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 39px;
  width: 62px;
  box-sizing: border-box;
  border-radius: 3px 0px 0px 3px;
  border-top: 1px solid rgb(235 235 235);
  border-bottom: 1px solid rgb(235 235 235);
  border-left: 1px solid rgb(235 235 235);
  background: rgb(249 250 252);
  span {
    margin-right: 0px;
  }
`;

const TextWithCheckBox = (props) => {
  const { value, onTextChange, textPlaceholder, isCheck, onCheckBoxChange } =
    props;
  return (
    <Root>
      <StyledCheckbox checked={isCheck} onChange={onCheckBoxChange} />
      <TextBox
        type="text"
        value={value}
        onChange={onTextChange}
        placeholder={textPlaceholder}
      />
    </Root>
  );
};

export default TextWithCheckBox;
