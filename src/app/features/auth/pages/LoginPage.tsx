import { useMemo } from 'react';

import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
    Button,
    Grid,
    IconButton,
    InputAdornment,
    Link,
    TextField,
    Typography
} from '@mui/material';
import { Google, VisibilityOff } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Controller } from 'react-hook-form';

import { RootState } from '../../../store';
import { useAuthStore, useFormLogin } from '../hooks';
import { AuthLayout } from '../layout';
import { FORGOT_PASSWORD, REGISTER } from '../routes';

export const LoginPage = () => {

    const { startLogin, startGoogleSignIn } = useAuthStore();
    const { status } = useSelector((state: RootState) => state.auth)
    const isAuthenticating = useMemo(() => status === '', [status]); // cheking

    const {
        control,
        errors,
        showPassword,
        handleSubmit,
        handleClickShowPassword,
        handleFormSubmit,
        handleMouseDownPassword
    } = useFormLogin(startLogin);

    const onGoogleSignIn = () => {
        startGoogleSignIn();
    }

    return (
        <AuthLayout title="¡Welcome back! Login">
            <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Controller
                            control={control}
                            name="email"
                            rules={{
                                required: 'This field is required',
                                pattern: { value: /^\S+@\S+$/i, message: 'Invalid Email' }
                            }}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email"
                                    type="email"
                                    error={!!errors.email}
                                    placeholder='email@google.com'
                                    fullWidth
                                    name="email"
                                    helperText={
                                        errors.email ?
                                            errors.email.message?.toString() :
                                            null
                                    }
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Controller
                            control={control}
                            name="password"
                            rules={{
                                required: 'This field is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long'
                                }
                            }}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Password'
                                    fullWidth
                                    name="password"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityIcon /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    error={!!errors.password}
                                    helperText={
                                        errors.password ?
                                            errors.password.message?.toString() :
                                            null
                                    }
                                />
                            )}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                type="submit"
                                variant='contained'
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                variant='contained'
                                fullWidth
                                onClick={onGoogleSignIn}
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    
                    <Grid container direction='row' justifyContent='space-between'>

                        <Link component={RouterLink} color='inherit' to={FORGOT_PASSWORD}>
                            I forgot my password
                        </Link>
    
                        <Link component={RouterLink} color='inherit' to={REGISTER}>
                            Sign up here
                        </Link>

                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
