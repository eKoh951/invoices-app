"use client";
import { Button } from "ui";
import { TextInput } from "ui/inputText";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const ProfileCard = () => {
  const theme = useTheme();

  return (
    <Box
    paddingTop={"72px"}
    width={"100%"}
   paddingBottom={"53px"}
    >
      <Box textAlign={"left"} marginBottom={"56px"}>
        <Typography variant="h1" paddingBottom={"0.66em"}>
          Profile
        </Typography>
        <Typography variant="body1">Customize your profile</Typography>
      </Box>
      <Box
        sx={{
          flexDirection: "row",
          width: "100%",
          display: "flex",
          
          [theme.breakpoints.down("desktop")]: {
            flexDirection: "column"
          },
        }}
      >
        <Paper
          elevation={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent:"center",
            minWidth:"328px",
            width:"266px",
         
            [theme.breakpoints.down("desktop")]: {
              width: "672px",
              marginBottom: "20px",
            },
            [theme.breakpoints.down("tablet")]: {
              width: "562px",
            },
            [theme.breakpoints.down("mobile")]: {
              width: "328px",
            },
          }}
        >
          <Box
            sx={{
              width: "172px",
              height: "176px",
              zIndex: "5",
              marginTop: "68px",
              marginBottom:"21px",
              [theme.breakpoints.down("desktop")]: {
                marginBottom:"13px"
              },
            }}
          >
            <Avatar
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>

          <Typography variant="h1" marginBottom={"8px"}>Username</Typography>
          <Typography variant="body1" 
          paddingBottom={"16px"}
          >mail.mail@mail.com</Typography>
        </Paper>
        <Box
          sx={{
            width: "444px",
            marginLeft: "20px",
            [theme.breakpoints.down("desktop")]: {
              width: "672px",
              marginLeft: "0px",
            },
            [theme.breakpoints.down("tablet")]: {
              width: "562px",
            },
            [theme.breakpoints.down("mobile")]: {
              width: "328px",
            },
          }}
        >
          <Paper
            elevation={1}
            sx={{
              padding: "24px 13.5px",
              marginBottom: "13px",
            }}
          >
            <Typography variant="h4" color={"primary.main"} >Settings</Typography>
            <Typography variant="body1" marginTop={"21px"} marginBottom={"10px"}>Username</Typography>
            <TextInput
              sx={{
                width: "100%",
              }}
            />
            <Box
            display={"flex"}
            justifyContent={"end"}
            marginTop={"39px"}
            >
              <Button
              sx={{
                color:"secondary.main",
                backgroundColor: "secondary.contrastText",
                marginRight:"8px"
              }}
              >
                Cancel
              </Button>
              <Button
              sx={{
                color:"error.contrastText",
                backgroundColor: "primary.main"
              }}
              >
                Save Changes
              </Button>
            </Box>
          </Paper>
          <Paper
            elevation={1}
            sx={{
              padding: "24px 13.5px",
              height: "145px"
            }}
          >
            <Typography variant="h4" color={"primary.main"}>Security</Typography>
            <Typography 
            variant="body1" 
            marginBottom={"7px"} 
            marginTop={"22px"}>
              Password</Typography>
            <Button
              sx={{
                width: "100%",
                color:"secondary.main",
                backgroundColor: "secondary.contrastText"
              }}
            >
              Send Recovery Email
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileCard;
