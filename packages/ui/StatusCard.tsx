import { Box, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ReactNode } from 'react';

interface StatusSquareProps {
  children: ReactNode
}

const StatusSquare: React.FC<StatusSquareProps> = ({ children}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width: '104px',
        height: '40px',
        borderRadius: '6px',
      }}
    >
      <FiberManualRecordIcon
        sx={{
          marginRight: '8px',
          height: '8px',
          width: '8px',
        }}
      />
      <Typography variant="h4">{children}</Typography>
    </Box>
  );
};

export default StatusSquare;