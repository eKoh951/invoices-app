import { TextInput } from "./inputText";
import InputDate from "./InputDate";
import { Button } from "./Button";
import { TextFieldInput } from "./TextFieldSelect";
import { Box, MenuItem, Paper, Stack, Typography } from "@mui/material";
import { ItemDescriptionRow } from "./ItemList";
import AddIcon from '@mui/icons-material/Add';



export const InvoiceFormulary = () => {
  return (
    <Paper
      sx={{
        width: "616px",
        padding: "56px",
      }}
    >
      <Box>
        <Stack>
          <Stack display={"flex"}>
            <Typography variant="h4" marginBottom={"24px"}>Bill From</Typography>
            <Stack>
              <Typography variant="body1">Street Address</Typography>
              <TextInput 
              sx={{
                marginBottom: "24px"
              }}
              />
              <Stack display={"flex"} direction={"row"} justifyContent={"space-between"}>
                <Stack>
                  <Typography variant="body1">City</Typography>
                  <TextInput 
                  />
                </Stack>

                <Stack>
                  <Typography variant="body1">Post Code</Typography>
                  <TextInput 
                  
                  />
                </Stack>
                <Stack>
                  <Typography variant="body1">Country</Typography>
                  <TextInput />
                </Stack>
              </Stack>
            </Stack>
            <Stack 
            marginTop={"48px"}
            >
              <Typography variant="h4" marginBottom={"24px"}>Bill To</Typography>
              <Stack>
                <Typography variant="body1">Client's Name</Typography>
                <TextInput 
                  sx={{
                    marginBottom: "24px"
                  }}
                />
              </Stack>
              <Stack>
                <Typography variant="body1">Client's Email</Typography>
                <TextInput 
                  sx={{
                    marginBottom: "24px"
                  }}
                />
              </Stack>
              <Stack>
                <Typography variant="body1">Street Address</Typography>
                <TextInput 
                  sx={{
                    marginBottom: "24px"
                  }}
                />
              </Stack>
            </Stack>
            <Stack display={"flex"} direction={"row"} justifyContent={"space-between"}>
              <Stack
              marginBottom={"24px"}
              >
                <Typography variant="body1">City</Typography>
                <TextInput 
                
                />
              </Stack>

              <Stack>
                <Typography variant="body1">Post Code</Typography>
                <TextInput />
              </Stack>
              <Stack>
                <Typography variant="body1">Country</Typography>
                <TextInput />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            display={"flex"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Stack
            marginBottom={"24px"}
            >
              <Typography variant="body1">Issue Date</Typography>
              <InputDate 
              />
            </Stack>

            <Stack>
              <Typography variant="body1">Payment Terms</Typography>

            </Stack>
          </Stack>
          <Stack>
            <Typography variant="body1">Project Description</Typography>
            <TextInput />
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="h5">ITEM LIST</Typography>
          <Stack display={"flex"} direction={"row"} textAlign={"left"} spacing={"16px"} >
            <Typography variant="body1"
            width={"214px"}
            >Item Name</Typography>
            <Typography variant="body1"
            width={"46px"}
            >Qty.</Typography>
            <Typography variant="body1"
            width={"100px"}
            >Price</Typography>
            <Typography variant="body1"
            width={"56px"}
            >Total</Typography>
          </Stack>
          <ItemDescriptionRow />
        </Stack>
        <Stack
        marginBottom={"44px"}
        marginTop={"16px"}                 
        >
        <Button 
        sx={{
          width: "100%"
        }}
        startIcon={<AddIcon />}>Add New Item</Button> 
        </Stack>
        <Stack 
        justifyContent={"space-between"}
        display={"flex"}
        flexDirection={"row"}
        >
        <Button>Discard</Button>
          <Stack
           display={"flex"}
           flexDirection={"row"}
           >
            <Button>Save as Draft</Button>
            <Button>Save & Send</Button>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
};
