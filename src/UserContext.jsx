import React from "react";
import { TOKEN_POST, USER_GET } from "./API";

export const UserContext = React.createContext();

export function UserStorage({ children }) {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const getUser = async (token) => {
        const { URL, options } = USER_GET(token);
        const res = await fetch(URL, options);
        const data = await res.json();

        setData(data);
        setLogin(true);
    };
    const userLogin = async (body) => {
        const { URL, options } = TOKEN_POST(body);
        const res = await fetch(URL, options);
        const data = await res.json();

        if (data.token) {
            localStorage["token"] = data.token;
            getUser(data.token);
        }
    }

    return (
        <UserContext.Provider value={{
            data,
            userLogin
        }}>
            {children}
        </UserContext.Provider>
    );
}
