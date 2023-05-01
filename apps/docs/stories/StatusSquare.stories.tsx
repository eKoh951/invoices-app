import React from 'react';
import StatusSquare from 'ui/StatusCard'

export default {
  title : 'Status Buttons',
  component : StatusSquare
}

const Template = (args) => <StatusSquare {...args} />;

export const Paid = Template.bind({});
Paid.args = {
  children: "paid"
}

export const Pending = Template.bind({});
Pending.args = {
  children: "pending"
}

export const Draft = Template.bind({});
Draft.args = {
  children: "draft"
}


