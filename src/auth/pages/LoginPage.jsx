import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Link, Alert } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks/useForm';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

const formData = {
    email: '',
    password: ''
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe de tener una arroba.' ],
    password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.' ],
}

export const LoginPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);
    
    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

    const { 
        formState, email, password, onInputChange,
        isFormValid, emailValid, passwordValid
    } = useForm(formData, formValidations);

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted(true);

        //console.log({ email, password });
        if ( !isFormValid ) return;
        dispatch( startLoginWithEmailPassword({ email, password }) );
    }

    const onGoogleSignIn = () => {
        console.log('onGoogleSignIn');
        dispatch( startGoogleSignIn() );
    }

    return (
        <>
            {/* Material ui trabaja en mobileFirst */}
            <AuthLayout title="Login">

                <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
                    <Grid container>
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="Correo" 
                                type="email" 
                                placeholder="correo@google.com"
                                fullWidth
                                name="email"
                                value={ email }
                                onChange={ onInputChange }
                                error={ !!emailValid && formSubmitted }
                                helperText={ emailValid }
                            />
                        </Grid>
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="Contraseña" 
                                type="password" 
                                placeholder="Contraseña"
                                fullWidth
                                name="password"
                                value={ password }
                                onChange={ onInputChange }
                                error={ !!passwordValid && formSubmitted }
                                helperText={ passwordValid }
                            />
                        </Grid>

                        <Grid 
                            container
                            display={ !!errorMessage ? '' : 'none' }
                            sx={{ mt: 1 }}
                        >
                            <Grid 
                                item 
                                xs={ 12 }
                            >
                                <Alert severity='error'>{ errorMessage }</Alert>
                            </Grid>
                        </Grid>

                        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={ 12 } md={ 6 }>
                                <Button 
                                    disabled={ isCheckingAuthentication }
                                    type="submit" 
                                    variant="contained" 
                                    fullWidth>
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={ 12 } md={ 6 }>
                                <Button
                                    disabled={ isCheckingAuthentication }
                                    variant="contained" 
                                    fullWidth 
                                    onClick={ onGoogleSignIn }>
                                    <Google />
                                    <Typography sx={{ ml: 1 }}>Google</Typography>
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container direction="row" justifyContent="end">
                            <Link component={ RouterLink } color="inherit" to="/auth/register">  {/* Le pasamos el componente del link que nos da el react-router-dom para poder navegar en nuestras rutas de la app, Este <Link></Link > no es el de react sino el de MUI por lo tanto es solo el diseño y para que funcione como los link de react-router tenemos que especificarselo en la propiedad component */}
                                Crear una cuenta
                            </Link>
                        </Grid>

                    </Grid>
                </form>

            </AuthLayout>
        </>
    )
}
