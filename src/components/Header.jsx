import React from "react";
import { Link } from "react-router-dom";
import SVGLogo from "../assets/icons/logo.svg";
import SVGUser from "../assets/icons/user.svg";
import { UserContext } from "../UserContext";

export default function Header() {
    const { data, userLogout } = React.useContext(UserContext);
    const User = () => {
        if (data)
            return (
                <Link className="header__login"
                to="/account">
                    <span>{data.nome}</span>

                    <button onClick={userLogout}>Sair</button>

                    <span>
                        <SVGUser />
                    </span>
                </Link>
            )
        else
            return (
                <Link className="header__login"
                to="/login">
                    <span>Login</span>

                    <span>
                        <SVGUser />
                    </span>
                </Link>
            )
    }

    return (
		<header className="header">
			<div className="header__container container">
                <Link className="header__logo"
                to="/"
                aria-label="Ícone delineado representando o rosto de um gato">
                    <SVGLogo />
                </Link>
                
                <User />
			</div>
		</header>
	);
}
