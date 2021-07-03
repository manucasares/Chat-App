import React, { useState } from 'react'

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
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


export const Signup = () => {

    const classes = useStyles();
    const [ { email, name, password, password2 }, handleInputChange ] = useForm({
        email: 'asd@asd.com',
        name: 'asd',
        password: '',
        password2: ''
    });

    const [ emailError, setEmailError ] = useState( false );
    const [ nameError, setNameError ] = useState( false );
    const [ passwordError, setPasswordError ] = useState( false );
    const [ password2Error, setPassword2Error ] = useState( false );
    const [ differentPasswords, setDifferentPasswords ] = useState( false );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        setEmailError( false );
        setNameError( false );
        setPasswordError( false );
        setPassword2Error( false );
        setDifferentPasswords( false );

        if ( !email ) setEmailError( true );
        if ( !name ) setNameError( true );
        if ( !password ) setPasswordError( true );
        if ( !password2 ) setPassword2Error( true );

        if ( password !== password2 ) {
            setPasswordError( true );
            setPassword2Error( true );
            setDifferentPasswords( true );
        }

        console.log('signup')
    }


    return (
        <div className="animate__animated animate__fadeIn">
             <Typography
                className={ classes.title }
                variant="h4"
                align="center"
                color="primary"
            >
                Create Account
           </Typography>
            <Typography
                variant="subtitle1"
                align="center"
            >
                Already have an Account?
                <Link
                    to="/auth/login"
                    className={ classes.link }
                >
                    Login!
                </Link>
           </Typography>

            <form
                className={ classes.form }
                onSubmit={ handleSubmit }
            >
                <TextField
                    variant="outlined"
                    label="Email"
                    fullWidth
                    color="primary"
                    value={ email }
                    name="email"
                    onChange={ handleInputChange }
                    error={ emailError }
                />

                <TextField
                    variant="outlined"
                    label="Name"
                    fullWidth
                    color="primary"
                    value={ name }
                    name="name"
                    onChange={ handleInputChange }
                    error={ nameError }
                />

                <TextField
                    type="password"
                    variant="outlined"
                    label="Password"
                    color="primary"
                    value={ password }
                    name="password"
                    onChange={ handleInputChange }
                    error={ passwordError }
                    fullWidth
                />

                <TextField
                    type="password"
                    variant="outlined"
                    label="Repeat your password"
                    color="primary"
                    value={ password2 }
                    name="password2"
                    onChange={ handleInputChange }
                    error={ password2Error }
                    fullWidth
                />

                {
                    ( differentPasswords ) &&
                        <Typography
                            variant="subtitle1"
                            color="error"
                        >
                            Passwords must be the same!
                        </Typography>
                }

                <Button
                    className={ classes.login_btn }
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Sign Up
                </Button>
            </form>
        </div>
    )
}
