import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { Divider } from "@mui/material";
import { PaletteMode } from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.desaturatedBlue.main,
    border: "1px solid #DFE3FA",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: ["league spartan"].join(","),
    "&:hover": {
      borderRadius: 4,
      borderColor: "#7C5DFA",
      boxShadow: "#7C5DFA",
    },
  },
}));

export default function OptionSelect() {
  const [days, setDays] = React.useState("");
  const handleChange = (event: { target: { value: string } }) => {
    setDays(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel>Payment Terms</InputLabel>
        <Select
          value={days}
          onChange={handleChange}
          input={<BootstrapInput />}
          sx={{ minWidth: "120px" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <Divider />
          <MenuItem value={1}>Next 1 Day</MenuItem>
          <Divider />
          <MenuItem value={2}>Next 7 Days</MenuItem>
          <Divider />
          <MenuItem value={3}>Next 14 Days</MenuItem>
          <Divider />
          <MenuItem value={3}>Next 30 Days</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
