import React from "react";

const ErrorText = (props) => {
  return (
    <span style={{ color: "red", fontStyle: "italic" }}>{props.children}</span>
  );
};

export default ErrorText;
