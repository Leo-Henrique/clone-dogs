import React from "react";
import { Link } from "react-router-dom";
import SVGLogo from "../assets/icons/logo.svg";
import SVGUser from "../assets/icons/user.svg";

export default function Header() {
    return (
		<header className="header">
			<div className="header__container container">
                <Link className="header__logo"
                to="/"
                aria-label="Ícone delineado representando o rosto de um gato">
                    <SVGLogo />
                </Link>

                <Link className="header__login"
                to="/login">
                    <span>Login</span>

                    <span>
                        <SVGUser />
                    </span>
                </Link>
			</div>
		</header>
	);
}
