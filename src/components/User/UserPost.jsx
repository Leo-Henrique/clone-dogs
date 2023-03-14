import React from "react";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import Input from "../Form/Input";
import Button from "../Form/Button";
import Error from "../Helpers/Error";
import { PHOTO_POST } from "../../API";
import { useNavigate } from "react-router-dom";

export default function UserPost() {
    const fields = {
        nome: {
            label: "Nome",
            type: "text",
            state: useForm(),
        },
        peso: {
            label: "Peso",
            type: "number",
            state: useForm("number"),
        },
        idade: {
            label: "Idade",
            type: "number",
            state: useForm("number"),
        },
    };
    const [img, setImg] = React.useState({});
    const { data, error, loading, request } = useFetch();
    const navigate = useNavigate();
    const getFile = ({
        target: {
            files: [file],
        },
    }) => {
        setImg({
            raw: file,
            preview: URL.createObjectURL(file),
        });
    };
    const handleSubmit = async () => {
        const form = new FormData();

        Object.keys(fields).forEach((id) => form.append(id, fields[id].state.value));
        form.append("img", img.raw);

        const { token } = localStorage;
        const { URL, options } = PHOTO_POST(form, token);
        request(URL, options);
    };

    React.useEffect(() => { if (data) navigate("/account")}, [data, navigate]);

    return (
        <div className="post">
            <form className="post__form" data-animate="fadeRight">
                {Object.keys(fields).map((id) => {
                    const field = fields[id];

                    return (
                        <Input
                            key={id}
                            label={field.label}
                            id={id}
                            name={id}
                            type={field.type}
                            {...field.state}
                        />
                    );
                })}

                <label htmlFor="img" className="post__form__img">
                    <input
                        type="file"
                        id="img"
                        name="img"
                        onChange={getFile}
                    />
                </label>

                <Button
                    type="button"
                    onClick={handleSubmit}
                    loading={loading}
                    text="Postar"
                    loadingText="Postando..."
                />

                <Error error={error} />
            </form>

            {img.preview && (
                <div className="post__preview">
                    <img
                        src={img.preview}
                        alt="Imagem carregada pelo usuário"
                    />
                </div>
            )}
        </div>
    );
}
