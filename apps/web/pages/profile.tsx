"use client";
import { Button} from "ui";
import {TextInput} from "ui/inputText"
import { Avatar, Box, Typography } from "@mui/material";
import {useTheme} from "@mui/material";


const ProfileCard = () => {
  const theme = useTheme();

  return (
    <Box 
    margin={"0 auto"}
    alignContent={"center"} 
    minWidth={"328px"}
    
    sx={{
      [theme.breakpoints.up('sm')]: {
        width: "87.4%" , 
      },
      [theme.breakpoints.only('md')]: {
        width: "87.4%" , 
      },
      }}
    >
      <Box  textAlign={"left"}
      marginBottom={"56px"}
      >
        <Typography variant="h2" >Profile</Typography>
        <Typography variant="body1" >Customize your profile</Typography>
      </Box>
      <Box>
        <Box 
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        marginBottom={"1.8em"}
       sx={{
        background: 'linear-gradient(0deg, white 60%, blue 40%)',
       }}
        >
            <Avatar 
            sx={{
              width: "172px",
              height: "176px",
              zIndex: "5"
            }}
            />
            <Typography variant="h4">Username</Typography>
            <Typography variant="body1">mail.mail@mail.com</Typography>
        </Box>
        <Box >
            <Box
            padding={"24px 13.5px"}
            marginBottom={"13px"}
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
                <Button
                sx={{
                  width: "50%"
                }}
                >Save Changes</Button>
              </Box>
            </Box>
            <Box
            padding={"24px 13.5px"}
            >
                <Typography variant="h4" >Security</Typography>
                <Typography variant="body1">Password</Typography>
                <Button 
                sx={{
                  width: "100%"
                }}
                >Send Recovery Email</Button>
            </Box>
        </Box>
      </Box>
    </Box>


  )

}

export default ProfileCard