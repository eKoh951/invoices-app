"use client";
import { Button} from "ui";
import {TextInput} from "ui/inputText"
import { Avatar, Box, Container, Typography } from "@mui/material";


const ProfileCard = () => {

  return (
  
    <Box 
    width={"328px"}
    margin={"0 auto"}
    alignContent={"center"}
    >
      <Box  textAlign={"left"}
      marginBottom={"56px"}
      >
        <Typography variant="h2" >Profile</Typography>
        <Typography variant="body1" >Customize your profile</Typography>
      </Box>
      <Box>
        <Box>
            <Avatar 
            sx={{
              width: "172px",
              height: "176px"
            }}
            />
            <Typography variant="h1">Username</Typography>
            <Typography variant="body1">mail.mail@mail.com</Typography>
        </Box>
        <Box >
            <Box
            padding={"24px 13.5px"}
            >
              <Typography variant="h4">Settings</Typography>
              <Typography variant="body1">Username</Typography>
              <TextInput 
              sx={{
                width:"100%"
              }}
              />
              <Box>
                <Button 
                sx={{
                  width:"50%"
                }}
                >Cancel</Button>
                <Button >Save Changes</Button>
              </Box>
            </Box>
            <Box>
                <Typography >Security</Typography>
                <Typography>Password</Typography>
                <Button>Send Recovery Email</Button>
            </Box>
        </Box>
      </Box>
    </Box>

   
  )

}

export default ProfileCard