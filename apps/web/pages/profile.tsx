"use client";
import { Button } from "ui";
import { TextInput } from "ui/inputText";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const ProfileCard = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box textAlign={"left"} marginBottom={"56px"}>
        <Typography variant="h1" paddingBottom={"0.66em"}>
          Profile
        </Typography>
        <Typography variant="body1">Customize your profile</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.up("tablet")]: {
            flexDirection: "row",
            width: "100%",
            height: "386px",
          },
        }}
      >
        <Paper
          elevation={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            [theme.breakpoints.up("tablet")]: {
              width: "266px",
            },
          }}
        >
          <Box
            sx={{
              width: "172px",
              height: "176px",
              zIndex: "5",
              marginTop: "68px",
              marginBottom:"21px"
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
          <Typography variant="body1">mail.mail@mail.com</Typography>
        </Paper>
        <Box
          sx={{
            [theme.breakpoints.up("tablet")]: {
              width: "444px",
              marginLeft: "20px"
            },
          }}
        >
          <Paper
            elevation={1}
            sx={{
              height: "228px",
              padding: "24px 13.5px",
              marginBottom: "13px",
            }}
          >
            <Typography variant="h4" color={"error.main"} >Settings</Typography>
            <Typography variant="body1" marginTop={"21px"} marginBottom={"10px"}>Username</Typography>
            <TextInput
              sx={{
                width: "100%",
              }}
            />
            <Box>
              <Button>
                Cancel
              </Button>
              <Button>
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
            <Typography variant="h4">Security</Typography>
            <Typography variant="body1">Password</Typography>
            <Button
              sx={{
                width: "100%",
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
