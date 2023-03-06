import React from "react";
import { TextInput } from "ui/inputText";

export default {
  title: "Example",
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Input = Template.bind({});
Input.args = {
  label: "Input Text",
  color: "primary",
  variant: "outlined",
};
