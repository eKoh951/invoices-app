import React from 'react'
import { TextInput } from "./inputText";
import InputDate from "./InputDate";
import { TextFieldInput } from './TextFieldSelect';
import {Paper, Stack, Typography} from '@mui/material'
import { InvoiceCreation } from "./InvoiceCreation";
import { ItemDescriptionRow } from './ItemList';


export const InvoiceFormulary = () => {
  return(
    <Paper>
      <Stack>
            <Stack
                display={"flex"}
              >
                  <Typography>Bill To</Typography>
              <Stack>
                      <Typography>Street Address</Typography>
                      <TextInput />
                <Stack
                display={"flex"}
                direction={"row"}
                spacing={2}
                >     
                  <Stack>
                      <Typography>City</Typography>
                      <TextInput />
                  </Stack>

                  <Stack>
                      <Typography>Post Code</Typography>
                      <TextInput />
                  </Stack>
                  <Stack>
                      <Typography>Country</Typography>
                      <TextInput />
                  </Stack>
                  </Stack>
              </Stack>
              <Stack>
                <Typography>Bill From</Typography>
              <Stack>
                      <Typography>Client's Name</Typography>
                      <TextInput />
                  </Stack> <Stack>
                      <Typography>Client's Email</Typography>
                      <TextInput />
                  </Stack> <Stack>
                      <Typography>Street Address</Typography>
                      <TextInput />
                  </Stack>
              </Stack>
              <Stack
                display={"flex"}
                direction={"row"}
                spacing={2}
                >     
                  <Stack>
                      <Typography>City</Typography>
                      <TextInput />
                  </Stack>

                  <Stack>
                      <Typography>Post Code</Typography>
                      <TextInput />
                  </Stack>
                  <Stack>
                      <Typography>Country</Typography>
                      <TextInput />
                  </Stack>
                  </Stack>


        </Stack>
        <Stack
                display={"flex"}
                direction={"row"}
                justifyContent={'space-around'}
                >     
                  <Stack>
                      <Typography>Issue Date</Typography>
                      <InputDate />
                  </Stack>

                  <Stack>
                      <Typography>Payment Terms</Typography>
                      <TextFieldInput >

                      </TextFieldInput>
                  </Stack>
                  

                  </Stack>
                  <Stack>
                      <Typography>Project Description</Typography>
                      <TextInput />
                  </Stack>

        
      </Stack>
      <Stack>
        <Typography>ITEM LIST</Typography>
        <Stack
        display={"flex"}
        direction={"row"}
        >
          <Typography>Item Name</Typography>
          <Typography>Qty.</Typography>
          <Typography>Price</Typography>
          <Typography>Total</Typography>
        </Stack>
      </Stack>
      <Stack>
          <ItemDescriptionRow />
      </Stack>
    </Paper>
  )
}