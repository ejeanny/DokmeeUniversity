import { useState, useCallback, useEffect } from "react";

let logoutTimer;

export const useAuth = () => {
    const [token, setToken] = useState(false);
    const [tokenExpirationDate, setTokenExpirationDate] = useState();
    const [userId, setUserId] = useState(false);
    const [captureAccess, setcaptureAccess] = useState(false);
    const [ecmAccess, setecmAccess] = useState(false);
    const [formAccess, setformAccess] = useState(false);

    const login = useCallback(
        (uid, token, captureAccess, ecmAccess, formAccess, expirationDate) => {
            setToken(token);
            setUserId(uid);
            setcaptureAccess(captureAccess);
            setecmAccess(ecmAccess);
            setformAccess(formAccess);
            const tokenExpirationDate =
                expirationDate || new Date(new Date().getTime() + 1000 * 3600);
            setTokenExpirationDate(tokenExpirationDate);
            localStorage.setItem(
                "userData",
                JSON.stringify({
                    userId: uid,
                    token: token,
                    expirationDate: tokenExpirationDate.toISOString(),
                    captureAccess: captureAccess,
                    ecmAccess: ecmAccess,
                    formAccess: formAccess,
                })
            );
        },
        []
    );
    console.log(tokenExpirationDate);
    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setTokenExpirationDate(null);
        setcaptureAccess(null);
        setecmAccess(null);
        setformAccess(null);
        localStorage.removeItem("userData");
    }, []);

    useEffect(() => {
        if (token && tokenExpirationDate) {
            const remainingTime =
                tokenExpirationDate.getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    }, [token, logout, tokenExpirationDate]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("userData"));
        if (
            storedData &&
            storedData.token &&
            new Date(storedData.expiration) > new Date()
        ) {
            login(
                storedData.userId,
                storedData.token,
                storedData.userId,
                storedData.captureAccess,
                storedData.ecmAccess,
                storedData.formAccess,
                new Date(storedData.expiration)
            );
        }
    }, [login]);

    return {
        token,
        login,
        logout,
        userId,
        captureAccess,
        ecmAccess,
        formAccess,
    };
};
