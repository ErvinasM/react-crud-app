import { createTheme } from '@mui/material';
import './app.css';

const theme = createTheme({
  zIndex: {
    appBar: 1201,
  },
  typography: {
    fontFamily: 
      '"Oswald", sans-serif',
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          backgroundColor: "#323232",
        },
      },
    },
  },
});

export default theme;
