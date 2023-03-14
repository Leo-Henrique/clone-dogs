import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

export default function PhotoComments({ id, comments: photoComments }) {
    const [ comments, setComments ] = React.useState(() => photoComments);
    const { login } = React.useContext(UserContext);
    const commentsElement = React.useRef(null);

    React.useEffect(() => {
        const { current } = commentsElement;

        current.scrollTop = current.scrollHeight;
        
    }, [comments])

    return (
        <div className="comments">
            <ul className="comments__list"
            ref={commentsElement}>
                {comments.map(({
                    comment_ID,
                    comment_author,
                    comment_content
                }) => (

                    
                    <li key={comment_ID}>
                        <strong>{comment_author}: </strong>
                        <span>{comment_content}</span>
                    </li>
                ))}
            </ul>

            {login && <PhotoCommentsForm id={id} setComments={setComments} />}
        </div>
    );

}
