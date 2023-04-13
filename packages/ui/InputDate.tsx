import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';




export default function InputDate() {
  return (
    <LocalizationProvider 
    dateAdapter={AdapterDayjs}
    >
      <DatePicker 
      slots={{
        openPickerIcon : CalendarTodayIcon,
        rightArrowIcon : KeyboardArrowRightIcon,
        leftArrowIcon : KeyboardArrowLeftIcon,
      }}
      
      slotProps={{
        textField : {
          sx : {
            "& label.Mui-focused": {
              color: "primary.main" , 
              
            },
           "& .MuiOutlinedInput-root": {
              backgroundColor : "primary.dark",

              "&.Mui-focused fieldset": {
               borderColor: "primary.main" ,
               borderWidth : "1px"
             },
              '&:hover fieldset': {
               borderColor: 'primary.main',
              },
           },
           "& .MuiIconButton-root": {
            color: "icon.date"
          }
          },
        },
        popper : {
          sx : {
            "& .MuiPaper-root": {
              backgroundColor: "primary.dark",
              fontWeight: "700"
            },
            "& .MuiDateCalendar-root":{
              backgroundColor: "primary.dark",
              fontWeight: "700"
            },
                "& .MuiPickersDay-root.Mui-selected": {
              backgroundColor: "secondary.contrastText",
              color : "primary.main",
              fontWeight: "700"
            },
            "& .MuiPickersDay-dayWithMargin:hover": {
              color: "primary.main",
              backgroundColor: "secondary.dark"
            },
            "& .MuiPickersDay-root:not(.Mui-selected)" : 
            {
              border : "none",
              backgroundColor: "secondary.dark",
              fontWeight: "700"
            } ,
        
            "& .MuiSvgIcon-root": {
              color: "primary.main"
            },
            "& .MuiPickersYear-yearButton.Mui-selected": {
              color: "primary.main",
              backgroundColor: "secondary.dark"
            }, 
            "& .MuiPickersYear-yearButton:hover": {
              color: "primary.main",
              backgroundColor: "secondary.dark"
            },
            "& .MuiPickersYear-yearButton": {
              fontWeight: "700",
              color: "primary.main"
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


