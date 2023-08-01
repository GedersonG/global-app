import { AppRouter } from './app/router/AppRouter';
import { AppTheme } from './app/theme';

export const GlobalApp = () => {

    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    )
    
}
