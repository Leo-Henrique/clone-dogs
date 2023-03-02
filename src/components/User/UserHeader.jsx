import React from "react";
import { useLocation } from "react-router-dom";
import UserHeaderNav from "./UserHeaderNav";

export default function UserHeader() {
    const [title, setTitle] = React.useState(null);
    const location = useLocation();

    React.useEffect(() => {
        const titles = {
            "/account": "Minha conta",
            "/account/statistics": "Estatísticas da conta",
            "/account/post": "Postar uma foto"
        }
        
        setTitle(titles[location.pathname]);
    }, [location])

    return (
        <header className="userHeader">
            <h1 className="h1">{title}</h1>

            <UserHeaderNav />
        </header>
    );
}
