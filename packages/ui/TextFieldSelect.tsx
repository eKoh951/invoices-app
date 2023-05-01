import { TextField as MuiTextfield } from "@mui/material";
import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material";

type TextFieldProps = Pick<
  MuiTextFieldProps,
  | "variant"
  | "size"
  | "color"
  | "sx"
  | "placeholder"
  | "required"
  | "label"
  | "children"
  | "onChange"
  | "value"
>;

export const TextFieldInput = ({ ...rest }: TextFieldProps) => {
  const theme = useTheme();
  return (
    <MuiTextfield
      {...rest}
      select
      SelectProps={{
        IconComponent: ExpandMoreIcon,
        MenuProps: {
          sx:{
            "& .MuiMenuItem-root.Mui-selected": {
              backgroundColor: "inherit",
            },
            "& .MuiMenuItem-root:hover": {
              backgroundColor:
              theme.palette.mode === "dark" ? "background.paper" : "error.contrastText",
              color: "primary.main",
            },
            "& .MuiMenuItem-root.Mui-selected:hover": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.background.paper
                  : theme.palette.error.contrastText,
            },
            "& MuiMenu-list " : {
              backgroundColor: theme.palette.mode === "dark"
              ? "background.paper"
              : "error.contrastText",
            }
          }
          }
         
      }}
      // Agrega la propiedad InputProps aquí
      InputProps={{
        sx: {
          "& label.Mui-focused": {
            color: theme.palette.mode === "dark" ? "background.paper" : "error.contrastText"
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "purple.main",
          },
          "& .MuiFilledInput-underline:after": {
            borderBottomColor: "purple.main",
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: theme.palette.mode === "dark" ? "background.paper" : "error.contrastText",

            "&.Mui-focused fieldset": {
              borderColor: theme.palette.mode === "dark" ? "primary.dark" : "primary.main" ,
            },
            "&:hover fieldset": {
              color: theme.palette.mode === "dark" ? "primary.dark" : "primary.main" ,
            }},
          "& .MuiSelect-icon": {
            color: "primary.main",
          },
        },
      }}
    />
  );
};