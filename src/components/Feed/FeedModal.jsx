import React from "react";
import { PHOTO_GET } from "../../API";
import { useAnimation } from "../../hooks/useAnimation";
import useFetch from "../../hooks/useFetch";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import PhotoContent from "../Photo/PhotoContent";

export default function FeedModal({ photo, setModalPhoto }) {
    const {data, error, loading, request} = useFetch();
    const { animationDuration, animationClass } = useAnimation([PhotoContent, photo]);
    const closeModal = ({ target, currentTarget }) => {
        const dialog = document.querySelector(".modal__dialog");
        
        if (target === currentTarget) {
            currentTarget.classList.remove("--show");
            dialog.classList.remove(animationClass);
            setTimeout(() => {
                setModalPhoto(null);
                document.body.classList.remove("modal-scrollbar");
            }, animationDuration);
        }
    }

    React.useEffect(() => {
        const { URL, options } = PHOTO_GET(photo.id);

        request(URL, options);
    }, [photo, request]);

    return (
        <div className="modal"
        onClick={closeModal}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />} 
        </div>
    );
}
