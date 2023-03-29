import {InvoiceFormulary} from 'ui/Formuary'
import React from 'react'




export default {
  title: "Invoice Formluary",
  component: InvoiceFormulary
};

const Template = (args) => <InvoiceFormulary {...args} />;

export const Invoice_Formulary = Template.bind({});
Invoice_Formulary.args = {
}