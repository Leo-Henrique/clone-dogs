import React from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input";
import Button from "../Form/Button";

export default function LoginForm() {
    const fields = {
        username: {
            label: "Usuário",
            type: "text",
        },
        password: {
            label: "Senha",
            type: "password",
        }
    };
    const [login, setLogin] = React.useState(() => {
        let form;
        
        Object.keys(fields).forEach(id => form = { ...form, [id]: "" });
        return form;
    });
    const handleChange = ({ target: { value, id } }) => {
        setLogin({ ...login, [id]: value });
    };
    const handleSubmit = async () => {
        const api = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token";
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(login),
        };
        const res = await fetch(api, options);
        const data = await res.json();

        // console.log

    };

    return (
        <section>
            <h1>Entrar</h1>

            <form>
                {Object.keys(fields).map(id => (
                    <Input key={id} 
                    id={id}
                    name={id}
                    label={fields[id].label}
                    type={fields[id].type}
                    onChange={handleChange} />
                ))}

                <Button type="button" onClick={handleSubmit}>
                    Entrar
                </Button>
            </form>

            <Link to="/login/register">Cadastre-se</Link>
        </section>
    );
}
