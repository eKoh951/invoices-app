import * as React from "react";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Avatar from "@mui/material/Avatar";
import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {logo} from './images/logo.svg'

export default function PermanentDrawerLeft({ ...rest }) {
  const dummyMenuItems = [
    {
      title: "Profile",
    },
    {
      title: "Invoices",
    },
    {
      title: " Log Out",
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const nativeOnChange = (e) => {
    const detail = {
      selectedIndex: e.target.selectedIndex,
    };
    e.target.selectedIndex = 0;

    e.target.dispatchEvent(new customEvent("itemClick", { detail }));
  };


  return (
    <Container>
      <CssBaseline />
      <Drawer
        {...rest}
        sx={{
           "& .MuiDrawer-paper": {
            width: "103px",
            boxSizing: "border-box",
            alignItems: "center",
            background: "#373B53",
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Grid2
          container
          justifyContent="space-between"
          height="100vh"
          width="100%"
          sx={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid2
          sx={{
            backgroundColor: "purple.main" , 
            width: "100%",
            height: "103px"
          }}
          >  
          <img src="./images/logo.svg"/>
          </Grid2>

          <Grid2 >
              <ListItemButton 
                 sx={{
                 justifyContent: "center"
                }}
              >
                <DarkModeIcon color="action" />
                </ListItemButton>
        <Divider color="#494E6E" />
            <ListItem disablePadding>
              <ListItemButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                aria-label="Open to show more"
                title="Open to show more"
              >
                <Avatar
                  alt="Remy Sharp"
                />
              </ListItemButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {dummyMenuItems.map((item) => (
                  <MenuItem
                    onClick={handleClose}
                    key={item.title}
                    value={item.title}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>
            </ListItem>
          </Grid2>
        </Grid2>
      </Drawer>
    </Container>
  );
}
