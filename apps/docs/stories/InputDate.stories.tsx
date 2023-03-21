import React from "react";
import InputDate from '../../../packages/ui/InputDate'

export default {
  title: "Example",
  component: InputDate,
}

const Template = (args: JSX.IntrinsicAttributes) => <InputDate {...args}/>

export const Date_Picker = Template.bind({});
Date_Picker.args = {
  variant: "outlined",
}
