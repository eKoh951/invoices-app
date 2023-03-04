import React from 'react'
import { DesktopDatePicker } from "@mui/x-date-pickers"
import { TextField } from "@mui/material"
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface DateProps {
  label: string
  inputFormat: string
}

export const InputDate = ({label, ...rest}: DateProps) => {

  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={['day', 'month', 'year']}
          label="Invert the order of views"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
        
    </LocalizationProvider>
  );

}


