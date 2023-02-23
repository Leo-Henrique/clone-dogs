import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginRegister from "./LoginRegister.jsx";
import LoginForgotPass from "./LoginForgotPass.jsx";


export default function Login() {
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
