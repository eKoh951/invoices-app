import React from 'react';
import StatusSquare from 'ui/StatusCard'

export default {
  title : 'Status Buttons',
  component : StatusSquare
}

const Template = (args) => <StatusSquare {...args} />;

export const Paid = Template.bind({});
Paid.args = {
  children: "Paid",
  color: "status.paid.main",
  backgroundColor: "status.paid.secondary"

};

export const Pending = Template.bind({});
Pending.args = {
  children: "Pending",
  color: "status.pending.main",
  backgroundColor: "status.pending.secondary"
};

export const Draft = Template.bind({});
Draft.args = {
  children: "Draft",
  color: "status.draft.main",
  backgroundColor: "status.draft.secondary"

};