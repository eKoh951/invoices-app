import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

// Only include variant, size, color from MuiButtonProps
type ButtonBaseProps = Pick<
  MuiButtonProps,
  "variant" | "size" | "color" | "sx" | "children" | "endIcon" | "startIcon"
>;

// Include everything from MuiButtonProps except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
}

export const Button = ({ label, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{label}</MuiButton>
);

Button.defaultProps = {
  variant: "contained",
  size: "large",
  color: "softBlue",
  sx: { borderRadius: "42px" },
};
