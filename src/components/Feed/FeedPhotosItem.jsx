import React from "react";
import SVGViews from "../../assets/icons/views.svg";

export default function FeedPhotosItem({ photo, setModalPhoto }) {
    const openModal = () => {
        setModalPhoto(photo);
        setTimeout(() => {
            const modal =  document.querySelector(".modal");

            modal.classList.add("--show");
        }, 20)
    };
    
    return (
        <li className="feed__item"
        onClick={openModal}>
            <img
                className="feed__img "
                src={photo.src}
                alt={photo.title}
            />

            <div className="feed__views">
                <div className="feed__views__icon">
                    <SVGViews />
                </div>
                <span className="feed__views__text">
                    {photo.acessos}
                </span>
            </div>
        </li>
    );
}
