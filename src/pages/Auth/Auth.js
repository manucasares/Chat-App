import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

import { Signup } from './Signup';
import { Login } from './Login';

const useStyles = makeStyles( ( theme ) => ({
    grid_container: {
        minHeight: '100vh',
    },
    auth_window: {
        paddingTop: theme.spacing( 3 ),
        paddingBottom: theme.spacing( 3 ),
        paddingLeft: theme.spacing( 2 ),
        paddingRight: theme.spacing( 2 ),
    }
}))

export const Auth = () => {

    const classes = useStyles();

    useEffect(() => {
        document.body.style.background = 'background: rgb(105,0,122)'
        document.body.style.background = 'linear-gradient(90deg, rgba(105,0,122,1) 2%, rgba(6,71,137,1) 82%)'
    }, [] )

    return (
        <Container
        >
            <Grid
                className={ classes.grid_container }
                container
                justify="center"
                alignItems="center"
            >
                <Grid
                    item
                    xs={ 12 }
                    sm={ 8 }
                    md={ 6 }
                    elevation={ 2 }
                >
                    <Paper className={ classes.auth_window }>
                        <Router>
                            <Switch>
                                <Route exact path="/auth/signup" component={ Signup } />
                                <Route path="/auth/login" component={ Login } />
                                <Redirect to="/auth/login" />
                            </Switch>
                        </Router>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
