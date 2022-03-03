import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'Arial'].join(','),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            borderRadius: '10px',
            background: 'hsl(0deg 0% 19%)',
            color: 'white',
            height: '2rem',
            padding: '0 0.5rem 0 1rem',
          },
        },
      },
    },
  },
});
