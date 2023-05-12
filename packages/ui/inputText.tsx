import { useTheme } from "@mui/material";
import { TextField as MuiTextfield } from "@mui/material";

export const TextInput = ({ ...rest }) => {
  const theme = useTheme();

  return (
    <MuiTextfield
      {...rest}
      sx={{
        "& label.Mui-focused": {
          color: theme.palette.mode === "dark" ? theme.palette.primary.dark : theme.palette.primary.main,
        },
        "& .MuiOutlinedInput-root": {
          backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.paper : theme.palette.error.contrastText ,
          borderColor: theme.palette.mode === "dark" ? theme.palette.primary.dark : theme.palette.primary.main,
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.mode === "dark" ? theme.palette.primary.dark : theme.palette.primary.main,
            borderWidth: "1px",
          },
          "&:hover fieldset": {
            borderColor: theme.palette.mode === "dark" ? theme.palette.primary.dark : theme.palette.primary.main,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.mode === "dark" ? theme.palette.primary.dark : theme.palette.draft.main,
            borderWidth: "1px",
          },
        }
      }}
    />
  );
};