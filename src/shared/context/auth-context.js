import { createContext } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    userId: null,
    token: null,
    firstName: null,
    lastName: null,
    isAdmin: false,
    captureAccess: false,
    ecmAccess: false,
    formAccess: false,
    login: () => {},
    logout: () => {},
});
