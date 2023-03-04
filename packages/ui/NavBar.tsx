import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LightMode  from '@mui/icons-material/LightMode';
import { Stack } from '@mui/system';



const drawerWidth = "108px";


export default function PermanentDrawerLeft({ ...rest}) {

  const dummyMenuItems = [
    {
      title: "Profile"
    },
    {
      title: "Invoices"
    },
    {
      title: "Settings"
    },
    {
      title: ""
    },
    {
      title: " Log Out"
    }
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const nativeOnChange = e => {
    const detail = {
      selectedIndex: e.target.selectedIndex
    };
    e.target.selectedIndex = 0;

    e.target.dispatchEvent(new customEvent("itemClick", { detail }));
  };

  const itemClick = e => {
    console.log("Item Clicked " + e.detail);
  };


  return (
    <Box sx={{ 
      display: 'flex' ,
    alignItems: 'center'}}>
      <CssBaseline />
      <Drawer {...rest}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          alignItems: 'center',
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            alignItems: 'center'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <Stack  justifyContent="space-between" >
              <Stack > 
                  <ListItem disablePadding >
                  <ListItemButton >
                      <LightMode />
                   </ListItemButton>
                  </ListItem>
              </Stack>
              <Stack >
              <ListItem disablePadding >
              <ListItemButton >
                      <LightMode />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding >
              <ListItemButton 
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              aria-label="Open to show more"
              title="Open to show more">
                      <AccountCircleIcon />
              </ListItemButton>
              <Menu
                   id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
              >
                 {dummyMenuItems.map(item => (
                  <MenuItem onClick={handleClose} key={item.title} value={item.title}>
                  {item.title}
                  </MenuItem>
        ))}
              </Menu>
            </ListItem>
              </Stack>
            
          </Stack>
           
          </List>
      </Drawer>
  </Box>
  )}