import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { blackTheme } from './';

interface AppThemeProps {
    children: React.ReactNode;
}

export const AppTheme: React.FC<AppThemeProps> = ({ children }) => {
    return (
        <ThemeProvider theme={blackTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
