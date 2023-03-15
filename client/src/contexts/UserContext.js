import { createContext, useContext, useEffect, useState } from "react";
import * as userService from '../services/userService';
import { AuthContext } from "./AuthContext";
export const UserContext = createContext();

export const UserProvider = ({
    children,
}) => {
    const [userInfo, setUserInfo] = useState({});
    const {user} = useContext(AuthContext);

    useEffect(() => {
        userService.getAll()
            .then(result => setUserInfo(result.filter(x => x._ownerId == user._id)));
    }, []);
    
    return <UserContext.Provider value={{
        userInfo,
    }}>
        {children}
    </UserContext.Provider >;
};