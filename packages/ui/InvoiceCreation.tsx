import { Button } from "./Button";
import { TextFieldInput } from "./TextFieldSelect";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Checkbox, MenuItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const availableStatus = ["Draft", "Pending", "Paid"];
interface InvoiceCreationProps {
  pendingInvoiceCount: number;
  onFilterChange: (selectedStatuses: string[]) => void;
}

export const InvoiceCreation = ({
  pendingInvoiceCount,
  onFilterChange,
}: InvoiceCreationProps) => {
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const handleFilterChange = (status: string) => {
    const updatedStatuses = selectedStatuses.includes(status)
      ? selectedStatuses.filter((s) => s !== status)
      : [...selectedStatuses, status];

    setSelectedStatuses(updatedStatuses);
    onFilterChange(updatedStatuses);
  };

  const handleStatusChange = (status: string) => {
    if (selectedStatuses.includes(status)) {
      setSelectedStatuses(selectedStatuses.filter((s) => s !== status));
      onFilterChange(selectedStatuses.filter((s) => s !== status));
    } else {
      setSelectedStatuses([...selectedStatuses, status]);
      onFilterChange([...selectedStatuses, status]);
    }
  };

  return (
    <>
      <Box
        marginTop={3}
        marginBottom={2}
        sx={{
          maxWidth: "730px",
        }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Typography variant="h1" marginBottom={1}>
              Invoices
            </Typography>
            <Typography variant="body1">
              There are {pendingInvoiceCount} pending invoices
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            minWidth={"300px"}
            maxHeight={"48px"}
            justifyContent="flex-end"
          >
            <TextFieldInput
              label={"Filter by Status"}
              variant={"outlined"}
              sx={{
                width: "45%",
                boxShadow: "none",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              {availableStatus.map((status) => (
                <MenuItem key={status}>
                  <Checkbox
                    checked={selectedStatuses.includes(status)}
                    onChange={() => handleStatusChange(status)}
                    sx={{
                      "& .MuiMenuItem-root:hover": {
                        backgroundColor: "inherit",
                        color: "font.main",
                      },
                      "&.Mui-checked": {
                        color: "purple.main",
                      },
                    }}
                  />
                  <Typography variant="h4">{status}</Typography>
                </MenuItem>
              ))}
            </TextFieldInput>
            <Button
              variant="contained"
              startIcon={<AddCircleIcon />}
              sx={{
                color: "white",
                ":hover": { bgcolor: "primary.light" },
              }}
            >
              New Invoice
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
