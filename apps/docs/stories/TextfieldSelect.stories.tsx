import React from "react";
import { MenuItem } from "@mui/material";
import { TextFieldInput } from "ui/TextFieldSelect";


export default {
  title: "FormElements/Select",
  component: TextFieldInput,
  argTypes: {
    placeholder : {control: "text"},
    label : {control: "text"},
    size: {
      control: { type: "select", options: ["small", "medium", "string"] },
    },
    variant: {
      control: { type: "select", options: ["filled", "outlined", "standard"] },
    },
    required: {
      control: { type: "boolean" },
    },
    select: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    margin : {
      control: {type: "select", options: ["dense", "normal", "none"]}
    }

  }
};

const Template = (args) => 

  <TextFieldInput {...args} >
    <MenuItem value={1}>Net 1 Day</MenuItem>
    <MenuItem value={2}>Net 7 Days</MenuItem>
    <MenuItem value={3}>Net 14 Days</MenuItem>
    <MenuItem value={4}>Net 30 Days</MenuItem>
  </TextFieldInput>

export const Option_Select = Template.bind({});
Option_Select.args = {

 sx : {
    minWidth : "120px",
    "& label.Mui-focused": {
      color: "purple.main"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "purple.main",
    },  
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "purple.main"
    },
    "& .MuiOutlinedInput-root": {
        backgroundColor: "componentBackground.main" ,

      "&.Mui-focused fieldset": {
        borderColor: "purple.main"
      },
      '&:hover fieldset': {
        borderColor: 'purple.main',
      },
    },
    "& .MuiSelect-icon" : {
      color: "purple.main"
    },
  },

};