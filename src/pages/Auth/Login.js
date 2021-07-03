import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

import { useForm } from 'hooks/useForm';

const useStyles = makeStyles( ( theme ) => ({
    form: {
        marginTop: theme.spacing( 3 ),
        '& > * + *': {
            marginTop: theme.spacing( 1 )
        }
    },
    login_btn: {
        fontWeight: 600
    },
    link: {
        color: theme.palette.primary.main,
        marginLeft: theme.spacing( 1 )
    },
    title: {
        fontWeight: 600
    }
}))

export const Login = () => {

    const classes = useStyles();
    const [ { email, password }, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const [ emailError, setEmailError ] = useState( false )
    const [ passwordError, setPasswordError ] = useState( false )

    const handleSubmit = ( e ) => {
        e.preventDefault();

        setEmailError( false );
        setPasswordError( false );

        if ( !email ) setEmailError( true );
        if ( !password ) setPasswordError( true );

        console.log('login')
    }


    return (
        <div className="animate__animated animate__fadeIn">
            <Typography
                className={ classes.title }
                variant="h4"
                align="center"
                color="primary"
            >
                Welcome Back!
           </Typography>
            <Typography
                variant="subtitle1"
                align="center"
            >
                Don't have an account?
                <Link
                    to="/auth/signup"
                    className={ classes.link }
                >
                    Sign Up!
                </Link>
           </Typography>

            <form
                className={ classes.form }
                onSubmit={ handleSubmit }
            >
                <TextField
                    type="email"
                    variant="outlined"
                    label="Email"
                    fullWidth
                    color="primary"
                    name="email"
                    value={ email }
                    onChange={ handleInputChange }
                    autoComplete="off"
                    error={ emailError }
                />

                <TextField
                    type="password"
                    variant="outlined"
                    label="Password"
                    fullWidth
                    color="primary"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                    autoComplete="off"
                    error={ passwordError }
                />

                <Button
                    className={ classes.login_btn }
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Login
                </Button>
            </form>
        </div>
    )
}
