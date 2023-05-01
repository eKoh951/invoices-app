
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material';
import { useState } from 'react';



export default function InputDate({onChange, value}) {

const theme = useTheme()

  return (
    <LocalizationProvider 
    dateAdapter={AdapterDayjs}
    >
      <DatePicker 
      onChange={onChange}
      value={value}
      slots={{
        openPickerIcon : CalendarTodayIcon,
        rightArrowIcon : KeyboardArrowRightIcon,
        leftArrowIcon : KeyboardArrowLeftIcon,
      }}
      
      slotProps={{
        textField : {
          sx : {
            "& label.Mui-focused": {
              color: theme.palette.mode === "dark" ? "primary.dark" : "primary.main" , 
              
            },
           "& .MuiOutlinedInput-root": {
              backgroundColor : theme.palette.mode === "dark" ? "background.paper" : "error.contrastText",

              "&.Mui-focused fieldset": {
               borderColor: theme.palette.mode === "dark" ? "primary.dark" : "primary.main",
               borderWidth : "1px"
             },
              '&:hover fieldset': {
               borderColor: theme.palette.mode === "dark" ? "primary.dark" : "primary.main",
              },
           },
           "& .MuiIconButton-root": {
            color: "secondary.main"
          }
          },
        },
        popper : {
          sx : {
            "& .MuiPaper-root": {
              backgroundColor: theme.palette.mode === "dark" ? "background.paper" : "error.contrastText",
              fontWeight: "700"
            },
            "& .MuiDateCalendar-root":{
              backgroundColor: theme.palette.mode === "dark" ? "background.paper" : "error.contrastText",
              fontWeight: "700"
            },
                "& .MuiPickersDay-root.Mui-selected": {
              backgroundColor: theme.palette.mode === "dark" ? "background.paper" : "error.contrastText",
              color : "primary.main",
              fontWeight: "700"
            },
            "& .MuiPickersDay-dayWithMargin:hover": {
              color: "primary.main",
              backgroundColor: theme.palette.mode === "dark" ? "background.paper" : "error.contrastText"
            },
            "& .MuiPickersDay-root:not(.Mui-selected)" : 
            {
              border : "none",
              backgroundColor: theme.palette.mode === "dark" ? "background.paper" : "error.contrastText",
              fontWeight: "700"
            } ,
        
            "& .MuiSvgIcon-root": {
              color: "primary.main"
            },
            "& .MuiPickersYear-yearButton.Mui-selected": {
              color: "primary.main",
              backgroundColor: theme.palette.mode === "dark" ? "background.paper" : "error.contrastText"
            }, 
            "& .MuiPickersYear-yearButton:hover": {
              color: "primary.main",
              backgroundColor: theme.palette.mode === "dark" ? "background.paper" : "error.contrastText"
            },
            "& .MuiPickersYear-yearButton": {
              fontWeight: "700",
              color: theme.palette.mode === "dark" ? "error.contrastText" : "secondary.dark"
             
            }, 
            "& .MuiDayCalendar-header": {
              display: "none"
            },
            "& .MuiPickersCalendarHeader-labelContainer": {
              fontWeight: "700"
            }
            }
          
        }
      }}
      />
    </LocalizationProvider>
  );
}


