import { Box, Container } from '@mui/material'
import ResponsiveDrawer from 'ui/NavBar'
import {useTheme} from '@mui/material'


interface LayoutProps { 
  children?:React.ReactNode
}

const Layout = (props:LayoutProps) => {
const {children} = props
const theme = useTheme()

  return (
    <>
      <ResponsiveDrawer/>
        <Box
        sx={{
          marginLeft:"103px",
          
          [theme.breakpoints.down("md")]: {
           marginTop:"80px",
           marginLeft:"0"
          },
        }}
        >
        {children}
        </Box>
    </>
  
  )
}

export default Layout