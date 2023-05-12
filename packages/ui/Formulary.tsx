import { TextInput } from "./inputText";
import InputDate from "./InputDate";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { TextFieldInput } from "./TextFieldSelect";
import { Box, MenuItem, Paper, Stack, Typography } from "@mui/material";
import { ItemDescriptionRow } from "./FormularyItemList";
import AddIcon from '@mui/icons-material/Add';
import {useTheme} from "@mui/material";




export const InvoiceFormulary = (props) => {
    const theme = useTheme()
    const { onClose, invoice = null } = props;
 
    // Agregue useState para cada campo que desea guardar
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [country, setCountry] = useState("");
    const [clientsName, setClientsName] = useState("");
    const [clientsEmail, setClientsEmail] = useState("");
    const [clientsStreetAddress, setClientsStreetAddress] = useState("");
    const [clientsCity, setClientsCity] = useState("");
    const [clientsPostCode, setClientsPostCode] = useState("");
    const [clientsCountry, setClientsCountry] = useState("");
    const [clientsPaymentTerms, setClientsPaymentTerms] = useState("");
    const [issueDate, setIssueDate] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [row, setRow] = useState([])
  
    // Función para manejar cambios en los TextInput
    const handleChange = (event, setState) => {
      setState(event.target.value);
      console.log(event.target.value)
    };

    const handleDateChange = (newValue) => {
      setIssueDate(newValue);
    };

    useEffect(() => {
      console.log(issueDate.$d);
    }, [issueDate]);

  return (
    <Paper
      sx={{
        width: "616px",
        padding: "56px",
        backgroundColor: theme.palette.mode === "dark" ? "background.paper" : "error.contrastText"
      }}
    >
      <Box>
        <Typography variant="h1" marginBottom={"48px"}>(action)(invoice.invoiceId)</Typography>
        <Stack>
          <Stack display={"flex"} >
            <Typography variant="h4" marginBottom={"24px"}>Bill From</Typography>
            <Stack>
              <Typography variant="body1">Street Address</Typography>
              <TextInput 
                value={streetAddress}
                onChange={(event) => handleChange(event, setStreetAddress)}
                  sx={{
                    marginBottom: "24px"
                  }}
              />
              <Stack display={"flex"} direction={"row"} justifyContent={"space-between"} spacing={"24px"}>
                <Stack>
                  <Typography variant="body1">City</Typography>
                  <TextInput 
                  value={city}
                  onChange={(event) => handleChange(event, setCity)}
                  />
                </Stack>

                <Stack>
                  <Typography variant="body1">Post Code</Typography>
                  <TextInput 
                  value={postCode}
                  onChange={(event) => handleChange(event, setPostCode)}
                  />
                </Stack>
                <Stack>
                  <Typography variant="body1">Country</Typography>
                  <TextInput
                    value={country}
                    onChange={(event) => handleChange(event, setCountry)}
                  />
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
                   value={clientsName}
                   onChange={(event) => handleChange(event, setClientsName)}
                  sx={{
                    marginBottom: "24px"
                  }}
                />
              </Stack>
              <Stack>
                <Typography variant="body1">Client's Email</Typography>
                <TextInput 
                     value={clientsEmail}
                     onChange={(event) => handleChange(event, setClientsEmail)}
                  sx={{
                    marginBottom: "24px"
                  }}
                />
              </Stack>
              <Stack>
                <Typography variant="body1">Street Address</Typography>
                <TextInput 
                  value={clientsStreetAddress}
                  onChange={(event) => handleChange(event, setClientsStreetAddress)}
                  sx={{
                    marginBottom: "24px"
                  }}
                />
              </Stack>
            </Stack>
            <Stack display={"flex"} direction={"row"} justifyContent={"space-between"} spacing={"24px"}>
              <Stack
              marginBottom={"24px"}
              >
                <Typography variant="body1">City</Typography>
                <TextInput
                 value={clientsCity}
                 onChange={(event) => handleChange(event, setClientsCity)}
                
                />
              </Stack>

              <Stack>
                <Typography variant="body1">Post Code</Typography>
                <TextInput 
                
                value={clientsPostCode}
                 onChange={(event) => handleChange(event, setClientsPostCode)}
                 />
              </Stack>
              <Stack>
                <Typography variant="body1">Country</Typography>
                <TextInput 
                value={clientsCountry}
                onChange={(event) => handleChange(event, setClientsCountry)}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            display={"flex"}
            direction={"row"}
            spacing={"24px"}
          >
            <Stack
            marginBottom={"24px"}
            width={"50%"}
            >
              <Typography variant="body1">Issue Date</Typography>
              <InputDate 
                 value={issueDate}
                 onChange={handleDateChange}
              />
            </Stack>

            <Stack
            width={"50%"}
            >

              <Typography variant="body1">Payment Terms</Typography>
              <TextFieldInput 
              value={clientsPaymentTerms}
              onChange={(event) => handleChange(event, setClientsPaymentTerms)}
              >
                  <MenuItem value={1}>Net 1 day</MenuItem>
                  <MenuItem value={7}>Net 7 days</MenuItem>
                  <MenuItem value={14}>Net 14 days</MenuItem>
                  <MenuItem value={30}>Net 30 days</MenuItem>
              </TextFieldInput>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="body1">Project Description</Typography>
            <TextInput
            value={projectDescription}
            onChange={(event) => handleChange(event, setProjectDescription)}
            />
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="h5">ITEM LIST</Typography>
          <Stack display={"flex"} direction={"row"} spacing={"16px"} >
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
          width: "100%",
          backgroundColor: "primary.dark",
          color: "draft.main"
        }}
        startIcon={<AddIcon />}>Add New Item</Button> 
        </Stack>
        <Stack 
        justifyContent={"space-between"}
        display={"flex"}
        flexDirection={"row"}
        >
        <Button
        onClick={onClose}
         sx={{
          backgroundColor: "secondary.contrastText",
          color: "secondary.main"
        }}
        >Discard</Button>
          <Stack
           display={"flex"}
           flexDirection={"row"}
           >
            <Button
             sx={{
              backgroundColor: "primary.contrastText",
              color: "draft.main",
              marginRight: "8px"
            }}
            >Save as Draft</Button>
            <Button
            sx={{
              backgroundColor: "primary.main",
              color: "error.contrastText",
            }}
            >Save & Send</Button>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
};