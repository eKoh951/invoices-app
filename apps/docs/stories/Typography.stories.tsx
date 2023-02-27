import React from "react";
import Types from "ui/Types";

export default {
  title: "Example/Typography",
  component: Types,
};

const Template = (args) => <Types {...args} />;

export const Typo = Template.bind({});
Typo.args = {
  label: "Heading",
  text: "Hola mundo",
  color: "softRed",
};
