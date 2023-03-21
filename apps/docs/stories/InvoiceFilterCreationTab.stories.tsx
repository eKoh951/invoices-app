import React from "react";
import {InvoiceCreation} from "ui/InvoiceCreation"

export default {
  title: "Creation",
  component: InvoiceCreation
}

const Template = (args) => <InvoiceCreation {...args} />

export const Invoice_Creation = Template.bind({});
Invoice_Creation.args = {
  sx : {
  }
}