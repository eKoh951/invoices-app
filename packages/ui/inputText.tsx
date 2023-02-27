import {TextField as MuiTextfield} from "@mui/material";
import { TextFieldProps as MuiTextFieldProps } from "@mui/material";




export const TextInput = ({ ...rest } : MuiTextFieldProps) =>
(
  <MuiTextfield {...rest} ></MuiTextfield>
)