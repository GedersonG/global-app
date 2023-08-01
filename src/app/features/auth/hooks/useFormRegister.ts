import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { RegisterSuccessAlert } from '../components';
import { LOGIN } from '../routes';
import { RegisterForm } from '../types';

type StartRegisterPassword = (data: RegisterForm) => Promise<void>;

export const useFormRegister = (startRegister: StartRegisterPassword) => {

    const [showPassword, setShowPassword] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors }, watch } = useForm();

    const handleClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleFormSubmit: SubmitHandler<FieldValues> = ({
        firstName,
        lastName,
        email,
        password
    }) => {

        setIsCreating(true);

        startRegister({
            firstName,
            lastName,
            email,
            password
        });

        RegisterSuccessAlert(email, () => {
            navigate(LOGIN);
            setIsCreating(false);
        });

    }

    return {
        // Properties
        control,
        errors,
        showPassword,
        watch,
        isCreating,

        // Methods
        handleSubmit,
        handleFormSubmit,
        handleClickShowPassword,
        handleMouseDownPassword
    }
}
