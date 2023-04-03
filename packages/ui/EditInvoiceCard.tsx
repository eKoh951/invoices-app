import { Button } from './Button';
import {Box, Stack, Typography} from '@mui/material'
import StatusSquare from "./StatusCard";

export const EditInvoice = ({ children, ...rest}) => (
  <Box
  borderRadius={"8px"}
  padding={"0 32px"}
  {...rest}
  >
    <Stack
    direction={"row"}
    justifyContent={'space-between'}
    alignItems={'center'}
    >
      <Stack
      direction={"row"}
      alignItems={'center'}
      >
          <Typography>Status</Typography>
          <StatusSquare 
          children='Paid' />
      </Stack>
      <Stack
      direction={"row"}
      spacing={1}
      >
        <Button
        >Edit</Button>
        <Button   
        >Delete</Button>
        <Button
        >Mark As Paid</Button>
      </Stack>
    </Stack>
  </Box>
)