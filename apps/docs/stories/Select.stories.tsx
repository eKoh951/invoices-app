import React from "react";
import { MenuItem } from "@mui/material";

import {OptionSelect} from "ui/Select";
export default {
  title: "Example",
  component: OptionSelect,
  argTypes : {
    autoWidth : {
      control : {type : "boolean"}
    },
    variant : {
      control : {type : "select", options: ["filled", "outlined", "standard"]}
    },
    label : {control: "text"},
} 
}

const Template = (...args) => 
<>
<OptionSelect {...args} >
  <MenuItem value = {1}>1</MenuItem>
  <MenuItem value = {2}>2</MenuItem>
  <MenuItem value = {3}>3</MenuItem>
</OptionSelect>
</>



export const Option = Template.bind({});
Option.args = {
    label : "Hola" ,
    sx : {width : "100px"}
}
  

