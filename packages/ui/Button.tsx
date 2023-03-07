import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonBaseProps = Pick<
  MuiButtonProps,
  "variant" | "size" | "color" | "sx" | "children" | "endIcon" | "startIcon"
>;

export interface ButtonProps extends ButtonBaseProps {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{children}</MuiButton>
);

Button.defaultProps = {
  variant: "contained",
  size: "large",
  color: "softBlue",
  sx: { borderRadius: "42px" },
};
