import React from "react";
import InputDate from '../../../packages/ui/InputDate'

export default {
  title: "Example",
  component: InputDate,
}

const Template = (args) => <InputDate {...args}/>

export const Date1 = Template.bind({});
Date1.args = {
  label: "Input Text",
  color: "primary" ,
  variant: "outlined",
};