import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function InputDate() {
  return (
    <LocalizationProvider 
    dateAdapter={AdapterDayjs}
    components={{
      openPickerIcon:CalendarTodayIcon
    }}
    >
      <DatePicker />
    </LocalizationProvider>
  );
}


