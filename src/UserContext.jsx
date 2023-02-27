import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./API";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export function UserStorage({ children }) {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();
    const getUser = async (token) => {
        const { URL, options } = USER_GET(token);
        const res = await fetch(URL, options);
        const data = await res.json();

        setData(data);
        setLogin(true);
    };
    const userLogin = async (body) => {
        try {
            setError(null);
            setLoading(true);

            const { URL, options } = TOKEN_POST(body);
            const res = await fetch(URL, options);
            navigate("./account")

            if (!res.ok) {
                const msg = (text) => {
                    throw new Error(text);
                }

                if (res.status == 403) 
                    msg("Usuário não encontrado!");
                else
                    msg("Erro inesperado!");
            }

            const { token } = await res.json();

            localStorage["token"] = token;
            await getUser(token);

        } catch (error) {
            console.log(error, error.message)
            setError(error.message);
            setLogin(false);
        } finally {
            setLoading(false)
        }
    } 
    const userLogout = React.useCallback(async () => {
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false)
        localStorage.removeItem("token");
        navigate("/login")
    }, [navigate]);

    React.useEffect(() => {
        const autoLogin = async () => {
            const token = localStorage.token;

            if (token) {
                try {
                    setError(null);
                    setLoading(true);

                    const { URL, options } = TOKEN_VALIDATE_POST(token);
                    const res = await fetch(URL, options);

                    if (!res.ok) throw new Error("O token é inválido!");
                    await getUser(token);

                } catch (error) {
                    userLogout();
                } finally {
                    setLoading(false);
                }
            }
        }

        autoLogin();
    }, [userLogout])


    return (
        <UserContext.Provider value={{
            data,
            login,
            loading,
            error,
            userLogin,
            userLogout
        }}>
            {children}
        </UserContext.Provider>
    );
}
