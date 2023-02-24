import "./scss/style.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import { UserStorage } from "./UserContext";

export default function App() {
    return (
        <BrowserRouter>
            <UserStorage>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login/*" element={<Login />} />
                </Routes>
                <Footer />
            </UserStorage>
        </BrowserRouter>
    );
}
