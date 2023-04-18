import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Link } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
        <>
            {/* Material ui trabaja en mobileFirst */}
            <AuthLayout title="Crear cuenta">

                <form>
                    <Grid container>
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="Nombre completo" 
                                type="text" 
                                placeholder="Jhon doe"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="Correo" 
                                type="email" 
                                placeholder="correo@google.com"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="Contraseña" 
                                type="password" 
                                placeholder="Contraseña"
                                fullWidth
                            />
                        </Grid>

                        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={ 12 }>
                                <Button variant="contained" fullWidth>
                                    Crear cuenta
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container direction="row" justifyContent="end">
                            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                            <Link component={ RouterLink } color="inherit" to="/auth/login">  {/* Le pasamos el componente del link que nos da el react-router-dom para poder navegar en nuestras rutas de la app, Este <Link></Link > no es el de react sino el de MUI por lo tanto es solo el diseño y para que funcione como los link de react-router tenemos que especificarselo en la propiedad component */}
                                Ingresar
                            </Link>
                        </Grid>

                    </Grid>
                </form>

            </AuthLayout>
        </>
    )
}
