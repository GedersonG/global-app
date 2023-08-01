import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { ForgotSuccessAlert } from '../components';
import { LOGIN } from '../routes';
import { ForgotForm } from '../types';

type StartForgotPassword = (data: ForgotForm) => Promise<void>;

export const useFormForgot = (startForgotPassword:StartForgotPassword) => {

    const [isRecovering, setIsRecovering] = useState(false);
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm();

    const handleFormSubmit: SubmitHandler<FieldValues> = ({
        email
    }) => {

        setIsRecovering(true);
        
        startForgotPassword({
            email
        });

        ForgotSuccessAlert(email, () =>{
            navigate(LOGIN);
            setIsRecovering(false);
        })

        // navigate(HOME);
    }

    return {
        // Properties
        control,
        errors,
        isRecovering,

        // Methods
        handleSubmit,
        handleFormSubmit
    }
}
