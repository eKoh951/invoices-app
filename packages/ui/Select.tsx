import {Select as MuiSelect} from '@mui/material'
import {SelectProps as MuiSelectProps} from '@mui/material'
import {MenuItem} from '@mui/material'
import React from 'react'

type SelectBaseProps = Pick<MuiSelectProps, "variant" | "size" >;


export interface SelectProps extends SelectBaseProps {
  label: string;
}

export const OptionSelect = ({ label, ...rest }: SelectProps) => (
  <MuiSelect placeholder={label} {...rest}>
   <MenuItem value={1}>Next 1 Day</MenuItem>
   <MenuItem value={2}>Next 7 Days</MenuItem>
   <MenuItem value={3}>Next 14 Days</MenuItem>
   <MenuItem value={4}>Next 30 Days</MenuItem>
  </MuiSelect>
);

OptionSelect.defaultProps = {
  variant: "contained",
  size: "medium",
  color: "primary",
};
