"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BalanceIcon from "@mui/icons-material/Balance";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

export default function Home() {
  return (
    <Container maxWidth="desktop" /*sx={{ pl: 103 }}*/>
      <Grid container desktop={12} alignItems="center">
        <Grid item desktop={6} mobile={12}>
          <Typography variant="h1" color="primary.main">
            Take control of your company today
          </Typography>
          <Typography variant="h1">
            through the most powerful and easy-to-use administrative system
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "secondary.light", paddingTop: "0.75rem" }}
          >
            Comply to all SAT requirements
          </Typography>
        </Grid>
        <Grid
          desktop={6}
          display={{ tablet: "none", mobile: "none", desktop: "block" }}
          container
          alignItems="center"
          style={{
            backgroundImage: "url(/image_1.png)",
            backgroundSize: "cover",
          }}
          height={362}
        ></Grid>
      </Grid>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" gutterBottom sx={{}}>
          Efficiency, Compliance and Intelligence
        </Typography>
      </Box>
      <Grid container spacing={2} paddingBottom={4}>
        <Grid item desktop={4} tablet={6} mobile={12} alignItems="center">
          <Box
            sx={{
              my: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CalendarMonthIcon sx={{ fontSize: 40, color: "primary.main" }} />
          </Box>

          <Typography
            variant="h3"
            align="center"
            sx={{ color: "secondary.light" }}
          >
            Fiscal Account Periods and Years
          </Typography>
          <Typography variant="body1" align="center" sx={{}}>
            You have acces to all information related to the compliance of taxes
            provisions to credit your income and deductions.
          </Typography>
        </Grid>
        <Grid item desktop={4} tablet={6} mobile={12} alignItems="center">
          <Box
            sx={{
              my: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BalanceIcon sx={{ fontSize: 40, color: "primary.main" }} />
          </Box>
          <Typography
            variant="h3"
            align="center"
            sx={{ color: "secondary.light" }}
          >
            Trial Balance
          </Typography>
          <Typography variant="body1" align="center" sx={{}}>
            Balance of sums and receivables or trial balance
          </Typography>
        </Grid>
        <Grid item desktop={4} mobile={12}>
          <Box
            sx={{
              my: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LibraryBooksIcon sx={{ fontSize: 40, color: "primary.main" }} />
          </Box>

          <Typography
            variant="h3"
            align="center"
            sx={{ color: "secondary.light" }}
          >
            Chart of Accounts
          </Typography>
          <Typography variant="body1" align="center" sx={{}}>
            Hierarchical account catalog based on grouping codes for accounting
            accounts.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        alignItems="center"
        style={{
          backgroundImage: "url(/image_2.png)",
          backgroundPosition: "center",
        }}
        height={208}
        justifyContent="flex-end"
      >
        <Grid item tablet={4} mobile={6}>
          <Typography variant="h3" sx={{ color: "white" }}>
            Electronic Invoicing
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "white", paddingBottom: "2em" }}
          >
            Electronic accounting module.
          </Typography>
          <Typography variant="h3" sx={{ color: "white" }}>
            Get paid Faster
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            Online opayments and automated follow-ups
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
