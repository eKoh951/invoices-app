import React from "react";
import {InvoiceFormulary} from 'ui/Formulary'
import {FormularyItemList} from 'ui/FormularyItemList'

export default { 
  title : "Example" , 
  component : InvoiceFormulary
}

const Template = (args) => <InvoiceFormulary {...args} />

export const Formulary = Template.bind({});
Formulary.args = {}