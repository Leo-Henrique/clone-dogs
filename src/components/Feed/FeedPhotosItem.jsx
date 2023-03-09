import React from "react";
import SVGViews from "../../assets/icons/views.svg";

export default function FeedPhotosItem({ photo }) {
    return (
        <li className="feed__item">
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
