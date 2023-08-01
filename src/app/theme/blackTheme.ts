import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const blackTheme = createTheme({
    palette: {
        primary: {
            main: '#121010'
        },
        secondary: {
            main: '#554a4a'
        },
        error: {
            main: red.A400
        }
    }
})
