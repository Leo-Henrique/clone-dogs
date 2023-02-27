import React from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../UserContext";

export default function LoginForm() {
    const fields = {
        username: {
            label: "Usuário",
            type: "text",
            state: useForm(),
        },
        password: {
            label: "Senha",
            type: "password",
            state: useForm(),
        },
    };
    const { userLogin, error, loading } = React.useContext(UserContext);
    const handleSubmit = () => {
        const validations = Object.values(fields).map((input) =>
            input.state.submit()
        );

        if (!validations.includes(false)) {
            const body = () => {
                let body = {};

                Object.keys(fields).forEach((key) => {
                    body[key] = fields[key].state.value;
                });
                return body;
            };

            userLogin(body());
        }
    };

    return (
        <section>
            <h1>Entrar</h1>

            <form>
                {Object.keys(fields).map((id) => (
                    <Input
                        key={id}
                        id={id}
                        name={id}
                        label={fields[id].label}
                        type={fields[id].type}
                        {...fields[id].state}
                    />
                ))}

                <Button type="button" 
                onClick={handleSubmit}
                disabled={loading}>
                    {!loading ? "Entrar" : "Carregando..."}
                </Button>

                {error && <p>{error}</p>}
            </form>

            <Link to="/login/register">Cadastre-se</Link>
        </section>
    );
}
