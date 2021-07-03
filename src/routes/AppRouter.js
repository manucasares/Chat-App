import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { Auth } from 'pages/Auth/Auth';
import { Home } from 'pages/Home/Home';


export const AppRouter = () => {

    const [ token, setToken ] = useState( null );

    useEffect( () => { 
        setToken( localStorage.getItem( 'token' ) || '' );
    }, [] );

    return (
        <Router>

            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={ Auth }
                        isAuthenticated={ !!token }
                    />
                    <PrivateRoute
                        path="/"
                        component={ Home }
                        isAuthenticated={ !!token }
                    />
                </Switch>
            </div>
        </Router>
    );
}