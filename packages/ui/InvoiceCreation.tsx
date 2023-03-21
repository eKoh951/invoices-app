
import { Button } from "./Button";
import { TextFieldInput } from "./TextFieldSelect";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Box, Checkbox, MenuItem, Stack, Typography} from '@mui/material'

const availableStatus = ["Draft", "Pending", "Paid"]

export const InvoiceCreation = () => (
    <Box
    sx={{
      maxWidth: "730px"
    }}
      >
      <Stack
      direction={"row"}
      justifyContent={"space-between"}
      >
      <Stack>
        <Typography variant="h1">
            Invoices
        </Typography>
        <Typography variant="body1">
            There are (number) pending invoices
        </Typography>
      </Stack>
      <Stack 
        direction={"row"}
        spacing={2}
        minWidth={"300px"}
        >
        <TextFieldInput
          label={"Placeholder"}
          variant={"outlined"}
          sx={{
            width: "50%",
            boxShadow: 'none',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },  
          }}
        >
          {availableStatus.map((status)=>(
  
             <MenuItem key={status}>
                <Checkbox 
                 sx={{
                  "& .MuiMenuItem-root:hover": {
                    backgroundColor:  "inherit",
                    color : "font.main"
                  },
                  '&.Mui-checked': {
                    color: "purple.main",
                  }}}
                />
                <Typography variant="h4">{status}</Typography>
              </MenuItem>
          ))}
        
         
        </TextFieldInput>
        <Button
          startIcon={<AddCircleIcon />}
          sx={{
            paddingTop: "10px",
            maxWidth: "150px"
          }}
        >
          <Typography variant="button">
            New Invoice
          </Typography>
        </Button>
      </Stack>
   
      </Stack>
    </Box>

)

