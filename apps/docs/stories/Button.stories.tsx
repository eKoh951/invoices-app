import React from "react";
import { Button } from "ui";

export default {
  title: "Example/Button",
  component: Button,
} 

const Template = (args) => <Button {...args} />

export const Playground = Template.bind({});
Playground.args = {
  label: "Click me!",
  color: "primary" ,
  size: "lg"
};
