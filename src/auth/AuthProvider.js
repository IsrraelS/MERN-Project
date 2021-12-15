import { useState } from 'react';
import { createContext } from 'react';
import roles from '../helpers/roles';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    //const [user, setUser] = useState(null);
    const [user, setUser] = useState( null );

    const login = (useCredentials) => setUser ({ id: 1, role: roles.regular });
    const logout = () => setUser (null);

    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout
    };

    return <AuthContext.Provider  value={contextValue} >

        {children}

    </AuthContext.Provider>
    
}