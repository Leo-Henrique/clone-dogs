import React from "react";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../UserContext";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { USER_POST } from "../../API";
import body from "../../body";
import useFetch from "../../hooks/useFetch";
import Error from "../Helpers/Error";
import Head from "../Helpers/Head";

export default function LoginRegister() {
    const fields = {
        username: {
            label: "Usuário",
            type: "text",
            state: useForm(),
        },
        email: {
            label: "E-mail",
            type: "email",
            state: useForm(),
        },
        password: {
            label: "Senha",
            type: "password",
            state: useForm(),
        },
    };
    const { userLogin } = React.useContext(UserContext);
    const { loading, error, request } = useFetch();
    const handleSubmit = async () => {
        const { URL, options } = USER_POST(body(fields));
        const { response } = await request(URL, options);

        if (response.ok) userLogin(body(fields));
    };

    return (
        <>
            <Head title="Crie uma conta" desc="Registrar-se na rede." />
            <h1 className="h1">Cadastre-se</h1>

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

                <Button
                    type="button"
                    onClick={handleSubmit}
                    loading={loading}
                    text="Cadastrar"
                    loadingText="Cadastrando..."
                />

                <Error error={error} />
            </form>
        </>
    );
}
