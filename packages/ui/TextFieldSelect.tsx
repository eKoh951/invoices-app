import { TextField as MuiTextfield } from "@mui/material";
import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


type TextFieldProps = Pick<
  MuiTextFieldProps,
  "variant" | "size" | "color" | "sx" | "placeholder" | "required" | "label" |  "children"
>

export const TextFieldInput = ({...rest }: TextFieldProps) => (
  <MuiTextfield {...rest }  
  select 
  SelectProps={{
    IconComponent : ExpandMoreIcon,
     MenuProps : {
        sx: {
            "& .MuiMenuItem-root.Mui-selected": {
              backgroundColor: "inherit",
            },
            "& .MuiMenuItem-root:hover": {
              backgroundColor:  "inherit",
              color : "purple.main"
            },
            "& .MuiMenuItem-root.Mui-selected:hover": {
              backgroundColor: "inherit"
            }
            }  
          }
            }}
  />
);
