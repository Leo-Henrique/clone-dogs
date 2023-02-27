import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginRegister from "./LoginRegister.jsx";
import LoginForgotPass from "./LoginForgotPass.jsx";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom"


export default function Login() {
    const { login } = React.useContext(UserContext);

    if (login) return <Navigate to ="/account" />
    return (
        <>
            <Routes>
                <Route path="/"
                element={<LoginForm />} />

                <Route path="register"
                element={<LoginRegister />} />

                <Route path="forgotPass"
                element={<LoginForgotPass />} />

            </Routes>
        </>
    );
}
