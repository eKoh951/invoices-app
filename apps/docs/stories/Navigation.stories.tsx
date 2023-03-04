import React from "react";
import PermanentDrawerLeft from  "../../../packages/ui/NavBar"


export default {
  title: "Example",
  component: PermanentDrawerLeft,
}

const Template = (args) => <PermanentDrawerLeft {...args} />

export const NavBar = Template.bind({});
NavBar.args = {
  label: "center",
};
