import React from "react";
import PermanentDrawerLeft from "../../../packages/ui/NavBar";

export default {
  title: "Example",
  component: PermanentDrawerLeft,
};

const Template = (args) => <PermanentDrawerLeft {...args} />;

export const Navigation_Bar = Template.bind({});
Navigation_Bar.args = {
};
