import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginRegister from "./LoginRegister.jsx";
import LoginForgotPass from "./LoginForgotPass.jsx";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom"
import imgLogin from "../../assets/images/login.jpg";


export default function Login() {
    const { login } = React.useContext(UserContext);
    const paths = {
        login: "login",
        register: "register",
        forgotPass: "forgotPass"
    }
    const handleClass = () => {
        const { pathname } = useLocation();
        const { login, register, forgotPass } = paths;
        let blockClass;

        switch (pathname) {
            case "/login":
                blockClass = login;
                break;
            case register:
                blockClass = register;
                break;
            case forgotPass:
                blockClass = forgotPass
                break;
        }
        return blockClass;
    }
    console.log(handleClass())

    if (login) return <Navigate to ="/account" />
    return (
        <div className="forms">
            <div className="forms__img">
                <img src={imgLogin} 
                alt="Um gato com um pequeno chapéu amarelo" />
            </div>

            <section className={`forms__content ${handleClass()}`}
            data-animate="fadeLeft">
                <Routes>
                    <Route path="/"
                    element={<LoginForm />} />

                    <Route path={paths.register}
                    element={<LoginRegister />} />

                    <Route path={paths.forgotPass}
                    element={<LoginForgotPass />} />

                </Routes>
            </section>
        </div>
    );
}
