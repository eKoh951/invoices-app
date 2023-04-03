import React from "react";
import {EditInvoice} from 'ui/EditInvoiceCard'

export default {
  title: "FormElements/Edit Invoice",
  component: EditInvoice
}

const Template = (args) => <EditInvoice {...args}/>

export const Edit_Invoice = Template.bind({});
Edit_Invoice.args = {
  
}