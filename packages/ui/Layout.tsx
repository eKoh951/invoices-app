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
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          padding: "0",
          marginLeft:"103px",
          [theme.breakpoints.down("tablet")]: {
            paddingTop: '80px',
            marginLeft: "0"
          },
        }}
      >
        <Box
          sx={{
            width:"730px",
            paddingTop: "72px",
          }}
        >
          {children}
        </Box>
      </Container>
    </>
  )
}

export default Layout
