import { useState, useCallback, useEffect, useRef } from "react";
export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const activeHttpRequest = useRef([]);

    const sendRequest = useCallback(
        async (url, method = "GET", body = null, headers = {}) => {
            setIsLoading(true);
            const httpAbortcontrll = new AbortController();
            activeHttpRequest.current.push(httpAbortcontrll);
            try {
                const response = await fetch(url, {
                    method,
                    body,
                    headers,
                    signal: httpAbortcontrll.signal,
                });
                const responseData = await response.json();
                activeHttpRequest.current = activeHttpRequest.current.filter(
                    reqCtrl => reqCtrl !== httpAbortcontrll
                );
                if (!response.ok) {
                    throw new Error(responseData.message);
                }
                setIsLoading(false);
                return responseData;
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
                throw error;
            }
        },
        []
    );
    const clearError = () => {
        setError(null);
    };
    useEffect(() => {
        return () => {
            activeHttpRequest.current.forEach(abortCtrl => abortCtrl.abort());
        };
    }, []);
    return { isLoading, error, sendRequest, clearError };
};
