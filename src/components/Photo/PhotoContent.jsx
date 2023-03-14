import React from "react";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import SVGViews from "../../assets/icons/views.svg";
import useMedia from "../../hooks/useMedia";
import { useAnimation } from "../../hooks/useAnimation";
import { UserContext } from "../../UserContext";
import PhotoDelete from "./PhotoDelete";
import Image from "../Helpers/Image";

export default function PhotoContent({ data }) {
    const user = React.useContext(UserContext);
    const { photo, comments } = data;
    const { media: breakpointMd } = useMedia(null, "(max-width: 767.98px)");
    const Author = () => {
        if (user.data && user.data.username === photo.author) {
            return (
                <PhotoDelete id={photo.id} />
            )
        } else {
            return (
                <Link className="photo__infos__author" to={`/${photo.author}`}>
                    @{photo.author}
                </Link>
            );
        }
    };
    const Title = () => {
        return (
            <h1 className="photo__infos__title h1">
                <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
            </h1>
        );
    };

    useAnimation([]);

    return (
        <div className="modal__dialog photo"
        data-animate="zoomIn">
            {breakpointMd && (
                <div className="photo__header">
                    <Title />
                    <Author />
                </div>
            )}

            <div className="photo__img">
                <Image src={photo.src} alt={photo.title} />
            </div>

            <div className="photo__infos">
                {breakpointMd || <Author />}

                <span className="photo__infos__views">
                    <SVGViews />
                    {photo.acessos}
                </span>

                {breakpointMd || <Title />}

                <ul className="photo__infos__details">
                    <li>{photo.peso} kg</li>
                    <li>
                        {photo.idade} {photo.idade == 1 ? "ano" : "anos"}
                    </li>
                </ul>

                <PhotoComments id={photo.id} comments={comments} />
            </div>
        </div>
    );
}
