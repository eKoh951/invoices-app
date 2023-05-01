import React from "react";
import { TextInput } from "ui/inputText";


export default {
  title: "Example",
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
 
  
};
 
  
