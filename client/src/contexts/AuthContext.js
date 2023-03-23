import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext({});

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [userInfo, setUserInfo] = useState({});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userEdit = (userEdittedInfo) => {
        setUserInfo(state => state.map(x => x._id === userEdittedInfo._id ? userEdittedInfo : x));
    };

    const userLogout = () => {
        setAuth({});
        setUserInfo({});
    };

    return <AuthContext.Provider value={{
        user: auth,
        userLogin,
        userLogout,
        userEdit,
        isAuthenticated: !!auth.accessToken,
    }}>
        {children}
    </AuthContext.Provider >;
};