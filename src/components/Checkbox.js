import React from "react";

const Checkbox = (props) => {
  const { children, className, ...rest } = props;
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      {children}
    </label>
  );
};

export default Checkbox;
