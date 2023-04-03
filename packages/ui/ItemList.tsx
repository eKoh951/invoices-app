import { TextInput } from "./inputText";
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const ItemDescriptionRow = ({...rest}) => {
  return(
    <Paper
    elevation={0}
    sx={{
      display: "flex",
      width: "504px"
    }}
    {...rest}
    >
      <Stack
      display={"flex"}
      direction={"row"}
    
      >
        <Stack 
        >
            <TextInput
            sx={{
              width: "214px",
              marginRight: "16px"
              
             }}
        />
        </Stack>
        <Stack
         display={"flex"}
         direction={"row"}
         spacing={"16px"}
         alignItems={"center"}
        >
           <TextInput 
           sx={{
            width: "46px"
           }}
           />
           <TextInput 
           sx={{
            width: "100px"
           }}
           />
            <Typography 
            width={"62px"}
            >(Total)</Typography>
           <DeleteIcon />
        </Stack>
      </Stack>  
       
     
    </Paper>
  )
}