import React from 'react';
import StatusSquare from 'ui/StatusCard'

export default {
  title : 'Status Buttons',
  component : StatusSquare
}

const Template = (args) => <StatusSquare {...args} />;

export const Paid = Template.bind({});
Paid.args = {
  children: "Paid"
}

export const Pending = Template.bind({});
Pending.args = {
  children: "Pending"
}

export const Draft = Template.bind({});
Draft.args = {
  children: "Draft"
}


