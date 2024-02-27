import React from "react";
import {Grid, Avatar, TextField, Button, Box, Typography, Container} from '@mui/material'
//import { LockClockOutlined } from "@mui/icons-material"; https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
import img from './img/logo-white-without.png';
import '@fontsource/roboto/300.css';
//import imgBg from './img/sen.jpeg';

export const Login = () => {
    const avatarStyle={margin: '0 auto'}
    const boxstyle ={
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "35%",
        bgcolor: "background.paper",
        boxShadow: 24,
        borderRadius: '0.6rem',
    };
    const containerCstm ={
        height: '20rem'
    };

    const bgImg ={
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.77), rgba(5, 57, 112, 0.66)), url("https://desarrolloweb.senado.gob.mx/repo/bgImg.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0.6rem 0rem 0rem 0.6rem'
    }

    return <div>
        <Box sx={boxstyle}>
            <Grid container sx={containerCstm}>
                <Grid item xs={6} style={bgImg}>
                    <Box
                        style={{
                            marginTop: '40px',
                            color: 'red',
                            textAlign: 'center'
                        }}>
                            <Avatar style={avatarStyle} sx={{ width: 80, height: 80 }} src={img} ></Avatar>
                            <Typography >
                            Senado de la República
                            </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Container>
                    <Box component="form"
                            sx={{
                                '& .MuiAvatar-root': { m: 1 },
                                '& .MuiTextField-root': { m: 1 },
                                '& .MuiButton-root': { m: 1 },
                                textAlign: 'center'
                            }}
                            noValidate
                            autoComplete="off">
                        <h3>Acceso al Sistema de Control Presupuestal</h3>
                        <TextField label='Usuario' placeholder="Ingresa tu usuario" size="small" fullWidth required/>
                        <TextField label='Password' type="password" placeholder="Ingresa tu contraseña"  size="small" fullWidth required/>
                        <Button type='submit' variant="contained" color='primary' fullWidth >Iniciar Sesión</Button>
                    </Box>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    </div>
    ;
};