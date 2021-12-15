import { Redirect, Route } from 'react-router-dom';
import UseAuth from '../auth/UseAuth';
import routes from '../helpers/routes.js'

export default function PublicRoute(props) {
    
    // user en contexto global mediante un hook

    const { isLogged } = UseAuth();


    if (isLogged()) return <Redirect to={routes.projects} />;

    return <Route {...props} />;
    
}
