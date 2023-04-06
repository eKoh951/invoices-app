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
    <Container maxWidth="xl" /*sx={{ pl: 103 }}*/>
      <Grid container /*spacing={2} md={10}*/>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={6} xs={12}>
            <Typography variant="h3" color="#7C5DFA" sx={{ fontSize: 32 }}>
              Take control of your company today
            </Typography>
            <Typography variant="h3" sx={{ fontSize: 32 }}>
              through the most powerful and easy-to-use administrative system
            </Typography>
            <Typography variant="h3" sx={{ fontSize: 12, color: "#888EB0" }}>
              Comply to all SAT requirements
            </Typography>
          </Grid>
          <Grid
            md={6}
            display={{ xs: "none", md: "block" }}
            container
            spacing={2}
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
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 700, fontSize: 20 }}
          >
            Efficiency, Compliance and Intelligence
          </Typography>
        </Box>
        <Grid container spacing={2} paddingBottom={4}>
          <Grid item md={4} xs={6} alignItems="center">
            <Box
              sx={{
                my: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CalendarMonthIcon sx={{ fontSize: 40, color: "#7C5DFA" }} />
            </Box>

            <Typography align="center" sx={{ fontWeight: 700, fontSize: 16 }}>
              Fiscal Account Periods and Years
            </Typography>
            <Typography align="center" sx={{ fontSize: 12 }}>
              You have acces to all information related to the compliance of
              taxes provisions to credit your income and deductions.
            </Typography>
          </Grid>
          <Grid item md={4} xs={6} alignItems="center">
            <Box
              sx={{
                my: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BalanceIcon sx={{ fontSize: 40, color: "#7C5DFA" }} />
            </Box>
            <Typography align="center" sx={{ fontWeight: 700, fontSize: 16 }}>
              Trial Balance
            </Typography>
            <Typography align="center" sx={{ fontSize: 12 }}>
              Balance of sums and receivables or trial balance
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box
              sx={{
                my: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LibraryBooksIcon sx={{ fontSize: 40, color: "#7C5DFA" }} />
            </Box>

            <Typography align="center" sx={{ fontWeight: 700, fontSize: 16 }}>
              Chart of Accounts
            </Typography>
            <Typography align="center" sx={{ fontSize: 12 }}>
              Hierarchical account catalog based on grouping codes for
              accounting accounts.
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
          <Grid item md={4} xs={6}>
            <Typography sx={{ fontWeight: 700, color: "white" }}>
              Electronic Invoicing
            </Typography>
            <Typography sx={{ color: "white" }}>
              Electronic accounting module.
            </Typography>
            <Typography sx={{ fontWeight: 700, color: "white" }}>
              Get paid Faster
            </Typography>
            <Typography sx={{ color: "white" }}>
              Online opayments and automated follow-ups
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid></Grid>
    </Container>
  );
}
