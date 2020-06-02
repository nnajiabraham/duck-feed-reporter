import {
  BaseTextFieldProps,
  TextField,
  TextFieldProps,
} from "@material-ui/core";
import React from "react";

// mui typescript issue
// https://github.com/mui-org/material-ui/issues/15697#issuecomment-493419773
const getProps = (
  baseProps: BaseTextFieldProps,
  variant: TextFieldProps["variant"]
): TextFieldProps => {
  switch (variant) {
    case "filled":
      return { ...baseProps, variant };
    case "outlined":
      return { ...baseProps, variant };
    default:
      return { ...baseProps, variant };
  }
};

const TextInput: React.FC<BaseTextFieldProps> = ({ variant, ...restProps }) => {
  return (
    <>
      <TextField {...getProps(restProps, variant)} required fullWidth />
    </>
  );
};

export default TextInput;
