import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import SVGFeed from "../../assets/icons/feed.svg"
import SVGStatistics from "../../assets/icons/statistics.svg"
import SVGPost from "../../assets/icons/post.svg"
import SVGLogout from "../../assets/icons/logout.svg"


export default function UserHeader() {
    const { userLogout } = React.useContext(UserContext);

    return (
        <header className="userHeader">
            <h1 className="h1">
                Minha conta
            </h1>

            <nav className="userHeader__nav">
                <NavLink to="/account"
                aria-label="Minhas fotos" end>
                    <SVGFeed />
                </NavLink>

                <NavLink to="/account/statistics" 
                aria-label="Estatísticas da conta">
                    <SVGStatistics />
                </NavLink>

                <NavLink to="/account/post"
                aria-label="Adicionar uma foto">
                    <SVGPost />
                </NavLink>

                <button onClick={userLogout}
                aria-label="Sair da conta">
                    <SVGLogout />
                </button>
            </nav>
        </header>
    );
}
