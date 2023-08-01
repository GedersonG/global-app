import { useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes, LOGIN } from '../features/auth/routes';
import { useAuthStore } from '../features/auth/hooks';
import { CheckingAuth } from '../ui'
import { HomePage } from '../features/home/pages';

export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    if (status === 'checking') {
        return <CheckingAuth />
    }

    console.log(status);

    return (
        <Routes>

            {
                (status === 'authenticated')
                    ? <Route path="/*" element={<HomePage />} />
                    : <Route path="/*" element={<AuthRoutes />} />
            }

            <Route path='/*' element={<Navigate to={LOGIN} />} />

        </Routes>
    )
}