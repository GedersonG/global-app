import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { VisibilityOff } from '@mui/icons-material';

import { AuthLayout } from '../layout';
import { useAuthStore, useFormRegister } from '../hooks';

export const RegisterPage = () => {

  const { starRegister } = useAuthStore();

  const {
    control,
    errors,
    watch,
    isCreating,
    handleSubmit,
    handleFormSubmit,
    handleClickShowPassword,
    handleMouseDownPassword,
    showPassword
  } = useFormRegister( starRegister );

  return (
    <AuthLayout title="Create an account">

      <form
        onSubmit={ handleSubmit ( handleFormSubmit ) }
        className='animate__animated animate__fadeIn animate__faster'
      >
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Controller
              control={control}
              name="firstName"
              rules={{
                required: 'This field is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters'
                },
                maxLength: {
                  value: 20,
                  message: 'Name must be 20 characters maximum'
                }
              }}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First name"
                  type="text"
                  error={!!errors.firstName}
                  placeholder='First Name'
                  fullWidth
                  name="firstName"
                  helperText={
                    errors.firstName ?
                      errors.firstName.message?.toString() :
                      null
                  }
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Controller
              control={control}
              name="lastName"
              rules={{
                required: 'This field is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters'
                },
                maxLength: {
                  value: 20,
                  message: 'Name must be 20 characters maximum'
                }
              }}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Last name"
                  type="text"
                  error={!!errors.lastName}
                  placeholder='Last Name'
                  fullWidth
                  name="lastName"
                  helperText={
                    errors.lastName ?
                      errors.lastName.message?.toString() :
                      null
                  }
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Controller
              control={control}
              name="email"
              rules={{
                required: 'This field is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
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
                },
                maxLength: {
                  value: 25,
                  message: 'Password must not exceed 25 characters'
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/,
                  message:
                    'Password must contain at least one uppercase letter, one lowercase letter, one numeric character, and one special character (@$!%*?&)'
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

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Controller
              control={control}
              name="repeatPassword"
              rules={{
                required: 'This field is required',
                validate: (value) => value === watch('password') || 'Passwords do not match'
              }}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Repeat password"
                  type={showPassword ? "text" : "password"}
                  placeholder='Password'
                  fullWidth
                  name="repeatPassword"
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
                  error={!!errors.repeatPassword}
                  helperText={
                    errors.repeatPassword ?
                      errors.repeatPassword.message?.toString() :
                      null
                  }
                />
              )}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant='contained'
                disabled={isCreating}
              >
                Create account
              </Button>
            </Grid>
          </Grid>
          
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} color='inherit' to="/login">
              Log in
            </Link>
          </Grid>

        </Grid>

      </form>

    </AuthLayout>
  )
}
