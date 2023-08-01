import { Navigate, Route, Routes } from 'react-router-dom';

import { ForgotPasswordPage, LoginPage, RegisterPage } from '../pages';
import { FORGOT_PASSWORD, LOGIN, REGISTER } from '.';

export const AuthRoutes = () => {

    return (

        <Routes>
            
            <Route path={LOGIN} element={<LoginPage />} />
            <Route path={REGISTER} element={<RegisterPage />} />
            <Route path={FORGOT_PASSWORD} element={<ForgotPasswordPage />} />

            <Route path='/*' element={<Navigate to={LOGIN} />} />

        </Routes>
        
    )
}
