import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import logo from "./images/logo.svg";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import LoginIcon from '@mui/icons-material/Login';
import ThemeContext from "ui/ThemeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import { themes } from "./themes";

export default function NavBar() {
  const theme = useTheme();
  const {user} = useUser()
  const { toggleTheme } = useContext(ThemeContext);
  
  const MyLogo = () => {
    return (
      <Box
        sx={{
          position: "relative",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%', // Establece el ancho máximo al 100% del contenedor
          height: '100%', // Establece el alto máximo al 100% del contenedor
        }}
      >
        <Image
          src={logo}
          alt="logo"
          quality={25}
          width={100}
          height={100}
        />
      </Box>
    );
  };

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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          height: "80px",
          padding:"0",

          [theme.breakpoints.up("desktop")]: {
            display: "none",
          },
        }}
      >
        <Grid 
        display={"flex"} 
       
        
        >
          <MyLogo />
        </Grid>
        <Grid display={"flex"}>
          <ListItemButton
          onClick={(e) => {
            e.preventDefault();
            toggleTheme();
          }}
            sx={{
              justifyContent: "center",
            }}
            
          >
           {theme === themes.light ? (
          <DarkModeIcon sx={{ color : theme.palette.secondary.main}} />
          ) : (
          <LightModeIcon sx={{ color : theme.palette.secondary.main}} />
            )}
          </ListItemButton>
          <Divider sx={{
                color:"#ffffff",
                borderWidth:"1px"
                
            }}/>

      
            <ListItemButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              aria-label="Open to show more"
              title="Open to show more"
            >
              {user ? 
                 <Avatar alt="users profile picture" src={user.picture} />
                :
                <a href="/api/auth/login">
                  <LoginIcon />
                </a>
                 
                }
            </ListItemButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Invoices</MenuItem>
              <MenuItem>Log Out</MenuItem>
            </Menu>
       
        </Grid>
      </AppBar>
      <Drawer
        sx={{
          width: "103px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "103px",
            boxSizing: "border-box",
            paddingLeft:"0",
            borderTopRightRadius:"20px"

          },
          [theme.breakpoints.down("desktop")]: {
            display: "none",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Grid
          container
          justifyContent="space-between"
          height="100vh"
          sx={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
           <Grid 
        display={"flex"} 
       
        
        >
          <MyLogo />
        </Grid>
          <Grid
          width={"100%"}
          >
            <ListItemButton
         onClick={(e) => {
          e.preventDefault();
          toggleTheme();
        }}
              sx={{
                justifyContent: "center",
                alignItems:"center",
                padding:"28px "
              }}
            >
        {theme.palette.mode === "light" ? (
          <DarkModeIcon color="action" />
          ) : (
          <LightModeIcon color="action" />
            )}
            </ListItemButton>
            <Divider 
            
            sx={{
                color:"#ffffff",
                width:"100%"
                
            }}  />
            <ListItem
            disablePadding
            >
              <ListItemButton
              sx={{
                justifyContent: "center",
                alignItems:"center",
                padding: "24px"
              }}
                
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                aria-label="Open to show more"
                title="Open to show more"
              >
                {user ? 
                <>
                  <Avatar alt="users profile picture" src={user.picture} />
                  <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Invoices</MenuItem>
                <a href="/api/auth/logout">
                <MenuItem>Log Out</MenuItem>
                </a>
                
              </Menu>
                </>
               
                :
                <a href="/api/auth/login">
                  <LoginIcon />
                </a>

                 
                }
              </ListItemButton>
              
            </ListItem>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
}
