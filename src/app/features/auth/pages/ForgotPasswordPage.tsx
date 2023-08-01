import { Button, Grid, Link, TextField } from '@mui/material';
import { AuthLayout } from '../layout';
import { Link as RouterLink } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { useAuthStore, useFormForgot } from '../hooks';
import { LOGIN, REGISTER } from '../routes';

export const ForgotPasswordPage = () => {

  const { startForgotPassword } = useAuthStore();

  const {
    control,
    errors,
    handleFormSubmit,
    handleSubmit
  } = useFormForgot(startForgotPassword);

  return (

    <AuthLayout title="Forgot password">
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

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant='contained'
              >
                Send reset code
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='space-between'>

            <Link component={RouterLink} color='inherit' to={LOGIN}>
              Back to login
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
