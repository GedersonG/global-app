import { useState } from 'react';

import { toast } from 'react-toastify';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { LoginForm } from '../types';

type StartLoginFunction = (data: LoginForm) => Promise<void>;

export const useFormLogin = (startLogin: StartLoginFunction) => {

    const [showPassword, setShowPassword] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm();

    const handleClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleFormSubmit: SubmitHandler<FieldValues> = ({
        email,
        password
    }) => {

        startLogin({
            email,
            password
        });

        toast.success(`Welcome back ${email} !`,{
            
        })

        // navigate(HOME);
    }
    return {
        // Properties
        showPassword,
        control,
        errors,

        // Methods
        handleSubmit,
        handleFormSubmit,
        handleClickShowPassword,
        handleMouseDownPassword
    }
}
