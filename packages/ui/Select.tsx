import React from "react";
import {
  Select as MuiSelect, 
  SelectProps as MuiSelectProps
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


type SelectBaseProps = Pick<
  MuiSelectProps,
  "variant" | "size" | "sx" | "children" | "label" | "IconComponent"
>;

export interface SelectProps extends SelectBaseProps {
  children: React.ReactNode;
}

export const OptionSelect = ({ children, IconComponent ,  ...rest }: SelectProps) => (
<MuiSelect 
IconComponent={ExpandMoreIcon}
{...rest}>
{children}</MuiSelect>
 );
