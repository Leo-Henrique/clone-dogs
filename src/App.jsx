import "./scss/style.scss";
import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import { UserContext } from "./UserContext";
import ProtectedRoute from "./components/Helpers/ProtectedRoute";
import User from "./components/User/User";
import UserHeaderNav from "./components/User/UserHeaderNav";
import useMedia from "./hooks/useMedia";
import { useAnimation } from "./hooks/useAnimation";
import Photo from "./components/Photo/Photo";
import UserProfile from "./components/User/UserProfile";
import { NotFound } from "./components/NotFound";

export default function App() {
    const location = useLocation();
    const navigation = useNavigate();
    const { login } = React.useContext(UserContext);
    const { media: mobile } = useMedia(applyHeight, [login]);
    const changingRoute = () => {
        let links = document.querySelectorAll("a");;
        const change = (event) => {
            const animate = document.querySelector("[data-animate]");

            if (animate) {
                const { href } = event.currentTarget;
                const { origin } = window.location;
                const path = href.replace(origin, "");

                event.preventDefault();
                animate.classList.remove("--animated");
                setTimeout(() => navigation(path), 300);
            }
        };
        const start = () => {
            links = document.querySelectorAll("a");
            links.forEach(link => link.addEventListener("click", change));
        }
        const end = () => links.forEach(link => link.removeEventListener("click", change));

        useAnimation([location], start, end);
    }
    const app = React.useRef();
    const navMobile = React.useRef();
    const footer = React.useRef();
    function applyHeight() {
        const footerHeight = footer.current.clientHeight;

        app.current.style.minHeight = `calc(100vh + ${footerHeight}px)`;
    
        if (login && matchMedia("(max-width: 575.98px)").matches && navMobile.current) {
            const navHeight = navMobile.current.clientHeight;

            app.current.style.paddingBottom = `${navHeight}px`;
        } else app.current.style.paddingBottom = 0;
    }

    changingRoute();

    return (
        <div className="app" ref={app}>
            <Header />

            <main className="app__body">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login/*" element={<Login />} />
                    <Route
                        path="account/*"
                        element={
                            <ProtectedRoute>
                                <User />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="photo/:id" element={<Photo />} />
                    <Route path="profile/:user" element={<UserProfile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            {login && mobile && <UserHeaderNav ref={navMobile} />}
            <Footer ref={footer} />
        </div>
    );
}
