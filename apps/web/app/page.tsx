"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardMedia, Grid } from "@mui/material";
import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BalanceIcon from "@mui/icons-material/Balance";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h3">
            Take control of your company today through the most powerful and
            easy-to-use administrative system
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Image alt="image 1" src="/image_1.png" width={580} height={350} />
        </Grid>
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
        <Typography variant="h4" gutterBottom>
          Efficiency, Compliance and Intelligence
        </Typography>
      </Box>
      <Grid container spacing={2} alignItems="stretch" height={350}>
        <Grid item xs={4} alignItems="center" justifyContent="center">
          <Box
            sx={{
              my: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CalendarMonthIcon color="primary" sx={{ fontSize: 40 }} />
          </Box>

          <Typography align="center">
            Fiscal Account Periods and Years
          </Typography>
          <Typography align="center">
            You have acces to all information related to the compliance of taxes
            provisions to credit your income and deductions.
          </Typography>
        </Grid>
        <Grid item xs={4} alignItems="center">
          <Box
            sx={{
              my: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BalanceIcon color="primary" sx={{ fontSize: 40 }} />
          </Box>
          <Typography align="center">Trial Balance</Typography>
          <Typography align="center">
            Balance of sums and receivables or trial balance
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              my: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LibraryBooksIcon color="primary" sx={{ fontSize: 40 }} />
          </Box>

          <Typography align="center">Chart of Accounts</Typography>
          <Typography align="center">
            Hierarchical account catalog based on grouping codes for accounting
            accounts.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        alignItems="center"
        style={{ backgroundImage: "url(/image_2.png)" }}
        height={350}
      >
        <Grid item xs={4}>
          <Typography>Electronic Invoicing</Typography>
          <Typography>Electronic accounting module.</Typography>
          <Typography>Get paid Faster</Typography>
          <Typography>Online opayments and automated follow-ups</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
