import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

export interface ButtonProps extends Omit<MuiButtonProps, 'children'> {
  children: React.ReactNode;
}

export const Button = ({ children, sx, ...rest }: ButtonProps) => (
  <MuiButton
  sx={{

      borderRadius: "42px",
      padding: "17px 24px",
      ...sx,
    }}
    {...rest}
  >
    {children}
  </MuiButton>
);