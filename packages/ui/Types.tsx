import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function Types() {
  return (
    <>
      <Stack direction="row" spacing={10}>
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Stack spacing={3}>
            <Typography variant="overline" display="block" gutterBottom>
              Spartan
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              H1 | Spartan Bold | 32px | 36px Line | -1 Spacing
            </Typography>
            <Typography variant="h1" gutterBottom>
              Aliquam porttitor mauris sit amet orci Aenean
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              H2 | Spartan Bold | 20px | 22px Line | -0.63 Spacing
            </Typography>
            <Typography variant="h2" gutterBottom>
              Aliquam porttitor mauris sit amet orci Aenean
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              H3 | Spartan Bold | 16px | 24px Line | -0.8 Spacing
            </Typography>
            <Typography variant="h3" gutterBottom>
              Aliquam porttitor mauris sit amet orci Aenean
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              H4 | Spartan Bold | 12px | 15px Line | -0.25 Spacing
            </Typography>
            <Typography variant="h4" gutterBottom>
              Aliquam porttitor mauris sit amet orci Aenean
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Stack spacing={3}>
            <Typography variant="caption" display="block" gutterBottom>
              ABCDEFGHIJKLMNOPQRSTUV WXYZabcdefghijklmnopqr
              stuvwxyz1234567890!@#$%^&*()
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Body 1 | Spartan Medium | 12px | 15px Line | -0,25 Spacing
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Body 2 | Spartan Medium | 11px | 18px Line | -0,23 Spacing
            </Typography>
            <Typography variant="body2" gutterBottom>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
              button text
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
