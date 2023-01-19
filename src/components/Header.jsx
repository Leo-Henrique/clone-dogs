import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
		<header>
			<div className="container">
				<nav>
					<Link to="/">Página Inicial</Link>
					<Link to="/login">Login</Link>
				</nav>
			</div>
		</header>
	);
}
