import React from "react";

export default function FeedPhotosItem({ photo }) {
    return (
        <li className="feed__item">
            <img src={photo.src} alt={photo.title} />

            <span>{photo.acessos}</span>
        </li>
    );
}
