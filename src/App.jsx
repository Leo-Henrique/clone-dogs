import "./scss/style.scss";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import { UserStorage } from "./UserContext";
import LeoAnimate from "leo-animate.js";

export default function App() {
    const location = useLocation();

    React.useEffect(() => {
        const options = { transitions: { duration: "400ms" } }

        new LeoAnimate(options);
    }, 
    [location])

    return (
        <UserStorage>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/*" element={<Login />} />
            </Routes>
            <Footer />
        </UserStorage>
    );
}
