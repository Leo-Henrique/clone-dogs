import React from "react";
import useFetch from "../../hooks/useFetch";
import { PHOTO_DELETE } from "../../API";
import Button from "../Form/Button";

export default function PhotoDelete({ id }) {
    const { loading, request } = useFetch();
    const remove = async () => {
        const confirm = window.confirm(
            "Tem certeza que deseja deletar sua foto? Essa ação é irreversível."
        );

        if (confirm) {
            const { token } = localStorage;
            const { URL, options } = PHOTO_DELETE(id, token);
            const { response } = await request(URL, options);

            if (response.ok) location.reload();
        }
    };

    return (
        <Button
            type="button"
            onClick={remove}
            loading={loading}
            text="Deletar"
            loadingText="Deletando..."
            className="photo__infos__delete"
        />
    );
}
