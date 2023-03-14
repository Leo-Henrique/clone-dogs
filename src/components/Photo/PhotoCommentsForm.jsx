import React from "react";
import { COMMENT_POST } from "../../API";
import SVGSubmit from "../../assets/icons/submit.svg";
import useFetch from "../../hooks/useFetch";
import Error from "../Helpers/Error";

export default function PhotoCommentsForm({ id, setComments}) {
    const [comment, setComment] = React.useState("");
    const { request, error } = useFetch();
    const submit = async () => {
        const { token } = localStorage;
        const { URL, options } = COMMENT_POST(id, { comment }, token);
        const { response, data } = await request(URL, options);

        if (response.ok) {
            setComment("");
            setComments(comments => [...comments, data]);
        }
    }

    return (
        <form className="comments__form">
            <label className="comments__form__label"
            htmlFor={id}
            aria-label="Adicionar um comentário">
                <textarea 
                    id={id}
                    name={id}
                    value={comment}
                    placeholder="Adicione um comentário..."
                    rows="2"
                    onChange={({ target }) => setComment(target.value)}
                ></textarea>
            </label>

            <button className="comments__form__btn"
            aria-label="Postar comentário"
            type="button"
            onClick={submit}>
                <SVGSubmit />
            </button>

            <Error error={error} />
        </form>
    );
}
