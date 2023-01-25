import "./scss/style.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login/Login";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
				<Route path="/login/*" element={<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
