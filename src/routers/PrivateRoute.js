import { Redirect, Route, useLocation } from 'react-router-dom';
import UseAuth from '../auth/UseAuth';
import routes from '../helpers/routes.js'

export default function PrivateRoute({ hasRole: role, ...rest }) {
    
    //const user = null;
    //const user = { id:1, role: 'regular'};

    // user en contexto global mediante un hook
    const location = useLocation();
    console.log(location);
    const { hasRole, isLogged } = UseAuth();

    if (role && !hasRole(role)) return <Redirect to={routes.home} />

    if (!isLogged()) return <Redirect to={{ pathname: routes.login, state: { from: location } }} />

    return <Route {...rest}/>;
    
}
