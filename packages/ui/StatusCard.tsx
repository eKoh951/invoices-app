import { Box, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ReactNode } from "react";
import PropTypes from "prop-types";

interface StatusSquareProps {
  children: ReactNode;
  sx: any;
}

const StatusSquare: React.FC<StatusSquareProps> = ({
  children,
  sx,
  ...rest
}) => {
  
  const getStatusStyle = (status: ReactNode) => {
    switch (status) {
      case "pending":
        return { backgroundColor: "warning.dark", color: "warning.main" };
      case "paid":
        return { backgroundColor: "success.dark", color: "success.main" };
      case "draft":
        return { backgroundColor: "draft.contrastText", color: "draft.main" };
      default:
        return {};
    }
  };

  const statusStyle = getStatusStyle(children);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "104px",
        height: "40px",
        borderRadius: "6px",
        ...statusStyle,
        ...sx,
      }}
      {...rest}
    >
      <FiberManualRecordIcon
        sx={{
          marginRight: "8px",
          height: "8px",
          width: "8px",
        }}
      />
      <Typography variant="h4">{children}</Typography>
    </Box>
  );
};

StatusSquare.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.any,
};

export default StatusSquare;