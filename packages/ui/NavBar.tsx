import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar} from '@mui/material';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import logo from "./images/logo.svg"
import Image from "next/image";


const drawerWidth = 108;

export default function ResponsiveDrawer(props) {

  const MenuItems = [
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


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const MyLogo = () => {
        return <Image src={logo} alt="logo" width={103} height={103} />;
      };

  const drawer = (
    <Box 

    >

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100vh" // Asegúrate de asignar una altura, de lo contrario, space-between no funcionará
        alignItems="center"
        sx={{
          backgroundColor: "#373B53"
        }}

      >
        <Box>
          <MyLogo />
        </Box>
        <Box display="flex"
        flexDirection="column"
        alignItems="center"

        >
           <ListItemButton
              sx={{
                justifyContent: "center",
              }}
            >
              <DarkModeIcon color="action" />
              
            </ListItemButton>

            <Divider 
            
            />
            <ListItem disablePadding>
              <ListItemButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                aria-label="Open to show more"
                title="Open to show more"
              >
                <Avatar alt="Remy Sharp" />
              </ListItemButton>
              
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {MenuItems.map((item) => (
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
        </Box>
      </Box>
    </Box>
  );

 

  return (
    <Box sx={{ 
      display: 'flex',
      borderRadius: '0px 20px 20px 0px;' 
     }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "purple.main"
        }}
      >
        <Toolbar
        sx={{ 
          display: { sm: 'none' },
          backgroundColor: "#373B53"

        }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              mr: 2, 
              display: { sm: 'none' } ,
            }}
          >
            <MyLogo />
          </IconButton>
            
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': 
            { boxSizing: 'border-box', 
              width: drawerWidth ,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
       
      </Box>
    </Box>
  );
}
