import React from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PASSWORD_LOST } from "../../API";
import Error from "../Helpers/Error";

export default function LoginForgotPass() {
    const email = useForm();
    const { data, loading, error, request } = useFetch();
    const submit = async () => {

        if (email.validate()) {
            const { URL, options } = PASSWORD_LOST({ 
                login: email.value, 
                url: location.href.replace("forgotPass", "resetPass")
            });
    
           await  request(URL, options);
        }
    }

    return (
        <section>
            <h1 className="h1">Esqueceu a senha?</h1>

            {data ? (
                <p style={{ color: "#4C1" }}>{data}</p>
            ) : (
                <form>
                    <Input label="E-mail / usuário"
                    type="text"
                    id="email"
                    name="email"
                    value={email.value} 
                    onChange={email.onChange} />

                    <Button onClick={submit} 
                    loading={loading}
                    text="Enviar e-mail" 
                    loadingText="Enviando..."
                    />
                </form>
            )}
            

            <Error error={error} />
        </section>
    );
}
