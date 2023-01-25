import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
    const form = {
        username: "",
        password: "",
    };
    const [login, setLogin] = React.useState(form);
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

        console.log(data);
    };

    return (
        <section>
            <h1>Entrar</h1>

            <form>
                {Object.keys(form).map((id) => (
                    <input
                        key={id}
                        id={id}
                        name={id}
                        placeholder={id}
                        onChange={handleChange}
                    />
                ))}

                <button type="button" onClick={handleSubmit}>
                    Entrar
                </button>
            </form>

            <Link to="/login/register">Cadastre-se</Link>
        </section>
    );
}
