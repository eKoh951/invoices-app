import React from "react";
import { TextInput } from "ui/inputText";


export default {
  title: "FormElements/TextInput",
  component: TextInput,
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

const Template = (args) => <TextInput {...args} />

export const Text_Input = Template.bind({});
Text_Input.args = {
 
  sx : {


    // input label when focused
    "& label.Mui-focused": {
      color: "purple.main"
    },
    // // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: "purple.main",
    },  
    // // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "purple.main"
    },
    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
        backgroundColor : "componentBackground.main",
        borderColor: "purple.main",

      "&.Mui-focused fieldset": {
        borderColor: "purple.main",
        borderWidth : "1px"
      },
      '&:hover fieldset': {
        borderColor: 'purple.main',
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "status.draft",
        borderWidth: "1px"
      }
    },
  }
};
 
  
