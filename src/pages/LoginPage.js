import useAuth from '../auth/UseAuth';

const useCredentials = {};

export default function LoginPages() {

    const { login } = useAuth();

    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={() => login(useCredentials)}>Iniciar Sesion</button>
        </div>
    )
}
