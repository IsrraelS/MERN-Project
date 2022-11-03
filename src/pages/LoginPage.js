import { useLocation } from 'react-router-dom';
import UseAuth from '../auth/UseAuth';

const userCredentials = {};

export default function LoginPage() {

    const location = useLocation();
    const { login } = UseAuth();

    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={() => login(userCredentials, location.state?.from)}>Iniciar Sesion</button>
        </div>
    )
}
