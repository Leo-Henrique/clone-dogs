import React from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../hooks/useForm";

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

    const handleSubmit = async () => {
        const inputs = Object.values(fields);
        const validations = inputs.map(input => input.state.submit());

        if (!validations.includes(false)) {
            const api = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token";
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(),
            };
            const res = await fetch(api, options);
            const data = await res.json();

        }
    };

    return (
        <section>
            <h1>Entrar</h1>

            <form>
                {Object.keys(fields).map(id => (
                    <Input
                        key={id}
                        id={id}
                        name={id}
                        label={fields[id].label}
                        type={fields[id].type}
                        {...fields[id].state}
                    />
                ))}

                <Button type="button" onClick={handleSubmit}>
                    Entrar
                </Button>
            </form>

            <Link to="/login/register">Cadastre-se</Link>
        </section>
    );
}
