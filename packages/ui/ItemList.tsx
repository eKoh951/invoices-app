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
      justifyContent: "center "
    }}
    {...rest}
    >
      <Stack
      display={"flex"}
      direction={"row"}
      maxWidth={"504px"}
      >
        <Stack 
        marginRight={"16px"}
        maxWidth={"240px"}
        >
            <TextInput
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
            maxWidth: "46px"
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