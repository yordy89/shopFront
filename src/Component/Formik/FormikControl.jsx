import React from "react";
import InputMaterial from "./InputMaterial";
import SelectMaterial from "./SelectMaterial";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "inputMaterial":
      return <InputMaterial {...rest} />;
      break;
    case "selectMaterial":
      return <SelectMaterial {...rest} />;
    default:
      break;
  }
};

export default FormikControl;
