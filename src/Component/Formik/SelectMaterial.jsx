import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const SelectMaterial = (props) => {
  const {
    name,
    label,
    options,
    handleChange = () => {
      console.log();
    },
  } = props;

  return (
    <div>
      <Field name={name} id={name}>
        {({ field }) => {
          return (
            <FormControl fullWidth>
              <InputLabel id={name}>{label}</InputLabel>
              <Select labelId={name} id={name} value={name} {...field}>
                {options.length > 0 &&
                  options.map((option) => {
                    return (
                      <MenuItem
                        value={option.key}
                        onClick={() => handleChange(option.key)}
                      >
                        {option.key}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default SelectMaterial;
