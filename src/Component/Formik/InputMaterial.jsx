import React from "react";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const InputMaterial = (props) => {
  const { label, name, className, ...rest } = props;
  return (
    <Field name={name}>
      {({ field }) => {
        return (
          <FormControl fullWidth>
            <InputLabel className={className} htmlFor={name}>
              {label}
            </InputLabel>
            <Input id={name} {...rest} {...field} className={className} />
            <ErrorMessage name={name} component={ErrorText} />
          </FormControl>
        );
      }}
    </Field>
  );
};

export default InputMaterial;
