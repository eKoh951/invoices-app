import { Box, Container } from "@mui/material";
import ResponsiveDrawer from "ui/NavBar";
import { useTheme } from "@mui/material";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <>
      <ResponsiveDrawer />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "0",
          margin: "0",
          paddingLeft:"103px",
          [theme.breakpoints.down("desktop")]: {
            paddingTop: '80px',
            paddingLeft: "0"
          },
        }}
      >
        <Box>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Layout;
