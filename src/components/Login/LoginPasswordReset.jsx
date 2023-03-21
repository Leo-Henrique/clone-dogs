import React from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PASSWORD_RESET } from "../../API";
import Error from "../Helpers/Error";
import { useNavigate } from "react-router-dom";

export default function LoginForgotPass() {
    const [login, setLogin] = React.useState("");
    const [key, setKey] = React.useState(""); 
    const password = useForm();
    const { error, loading, request } = useFetch();
    const navigate = useNavigate();
    const submit = async () => {
        if (password.validate()) {
            const { URL, options } = PASSWORD_RESET({ 
                login,
                key,
                password: password.value
            });
            const { response } = await request(URL, options);
    
            if (response.ok) navigate("/login");
        }
    }

    React.useEffect(() => {
        const params = new URLSearchParams(location.search);
        const login = params.get("login");
        const key = params.get("key");

        if (login) setLogin(login);
        if (key) setKey(key);
    }, []);

    return (
        <section>
            <h1 className="h1">Alterar sua senha</h1>
            <form>
                <Input label="Nova senha"
                type="password"
                id="password"
                name="password"
                value={password.value} 
                onChange={password.onChange} />

                <Button onClick={submit} 
                loading={loading}
                text="Alterar senha" 
                loadingText="Alterando..."
                />
            </form>

            <Error error={error} /> 
        </section>
    );
}
