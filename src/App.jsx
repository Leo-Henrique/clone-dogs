import "./scss/style.scss";
import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./hooks/Home";
import Login from "./components/Login/Login";
import { UserStorage } from "./UserContext";
import LeoAnimate from "leo-animate.js";
import ProtectedRoute from "./components/Helpers/ProtectedRoute";
import User from "./components/User/User";

export default function App() {
    const location = useLocation();
    const navigation = useNavigate();

    React.useEffect(() => {
        const duration = 300;
        const options = { transitions: { duration: `${duration}ms` } };
        const links = document.querySelectorAll("a");
        const change = (event) => {
            const animate = document.querySelector("[data-animate]");

            if (animate) {
                const { href } = event.currentTarget;
                const { origin } = window.location;
                const path = href.replace(origin, "");
    
                event.preventDefault();
                animate.classList.remove("--animated");
                setTimeout(() => navigation(path), duration);
            }
        }

        links.forEach(link => link.addEventListener("click", change));

        new LeoAnimate(options);
        return () => links.forEach(link => link.removeEventListener("click", change));
    }, 
    [location])

    return (
        <UserStorage>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login/*" element={<Login />} />
                <Route path="account/*" element={(
                    <ProtectedRoute><User /></ProtectedRoute>
                )} />
            </Routes>
            <Footer />
        </UserStorage>
    );
}
