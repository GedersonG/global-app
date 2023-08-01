import { useDispatch, useSelector } from 'react-redux';


import { RootState, onChecking, onLogin, onLogout } from '../../../store';
import { LoginForm, RegisterForm } from '../types';

export const useAuthStore = () => {

    const { status, errorMessage } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const starRegister = async ({
        firstName, 
        lastName, 
        email, 
        password
    }: RegisterForm) => {

        console.log(firstName, lastName, email, password)

        try {
            // TODO: Peticion al back del Register.
            
        } catch (error) {
            
        }

    }

    const startLogin = async ({ email, password }: LoginForm) => {

        dispatch(onChecking());
        console.log(email, password);

        try {
            // TODO: Peticion al back del login.

            dispatch(onLogin({
                email,
                displayName: 'Fonza'    // Momentaneo...
            }));
        } catch (error) {
            console.error(error)
        }

    }

    const startGoogleSignIn = async () => {

        // TODO: Pending...
        
    }

    const checkAuthToken = async () => {
    
        const token = sessionStorage.getItem('token');
        if (!token) return dispatch(onLogout(''));

        try {
            // TODO: Peticion al back del check token

            dispatch(onLogout('')); // Momentaneo

        } catch (error) {
            console.error(error)
        }
        
    }

    const startLogout = async () => {

        sessionStorage.clear();
        // TODO: Peticion al back de destruccion del token

        dispatch(onLogout(''));

    }

    const startForgotPassword = async () => {

        // TODO: Peticion al back de recuperacion de contraseña

    }    

    return {
        // Properties
        errorMessage,
        status,

        // Methods
        startLogin,
        startLogout,
        startGoogleSignIn,
        starRegister,
        startForgotPassword,
        checkAuthToken
    }

}