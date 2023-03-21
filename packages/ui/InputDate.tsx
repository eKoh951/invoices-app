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
              color: "purple.main" , 
              
            },
           "& .MuiOutlinedInput-root": {
              backgroundColor : "componentBackground.main",

              "&.Mui-focused fieldset": {
               borderColor: "purple.main" ,
               borderWidth : "1px"
             },
              '&:hover fieldset': {
               borderColor: 'purple.main',
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
              backgroundColor: "componentBackground.main",
              fontWeight: "700"
            },
            "& .MuiDateCalendar-root":{
              backgroundColor: "componentBackground.main",
              fontWeight: "700"
            },
                "& .MuiPickersDay-root.Mui-selected": {
              backgroundColor: "#ffffff",
              color : "purple.main",
              fontWeight: "700"
            },
            "& .MuiPickersDay-dayWithMargin:hover": {
              color: "purple.main",
              backgroundColor: "componentBackground.main"
            },
            "& .MuiPickersDay-root:not(.Mui-selected)" : 
            {
              border : "none",
              backgroundColor: "componentBackground.main",
              fontWeight: "700"
            } ,
        
            "& .MuiSvgIcon-root": {
              color: "purple.main"
            },
            "& .MuiPickersYear-yearButton.Mui-selected": {
              color: "purple.main",
              backgroundColor: "componentBackground.main"
            }, 
            "& .MuiPickersYear-yearButton:hover": {
              color: "purple.main",
              backgroundColor: "componentBackground.main"
            },
            "& .MuiPickersYear-yearButton": {
              fontWeight: "700",
              color: "font.main"
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


