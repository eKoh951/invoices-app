import { TextField as MuiTextfield } from "@mui/material";
import { TextFieldProps as MuiTextFieldProps } from "@mui/material";



type TextFieldProps = Pick<
  MuiTextFieldProps,
  "variant" | "size" | "color" | "sx" | "placeholder" | "required" | "label" |  "children"
>

export const TextInput = ({...rest }: TextFieldProps) => (
  <MuiTextfield
  sx={{
    height: "48px",
  }}
  {...rest }  />
);
