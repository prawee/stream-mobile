import * as SecureStore from 'expo-secure-store';
import { createContext, useContext } from 'react';

interface AuthProps {
    authState: { token: string | null; authenticated: boolean | null; user_id: string | null};
    onRegister: (email: string, password: string) => Promise<any>;
    onLogin: (email: string, password: string) => Promise<any>;
    onLogout: () => Promise<any>;
    initialized: boolean;
}

const TOKEN_KEY = 'my-stream-token';
export const API_URL = process.env.EXPO_PUBLIC_SERVER_URL;
const AuthContext = createContext<Partial<AuthProps>>({});

export const useAuth = () => {
    return useContext(AuthContext);
};