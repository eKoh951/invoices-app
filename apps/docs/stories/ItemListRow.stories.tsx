import {ItemDescriptionRow} from 'ui/ItemList'
import React from 'react'

export default {
  title: "ListItemDescription",
  component : ItemDescriptionRow
}

const Template = (args) => <ItemDescriptionRow  {...args}/>

export const ItemDescription = Template.bind({})
ItemDescription.args= {
  
}