import React from "react";

export default function Image({ alt, src, className }) {
    const [ skeleton, setSkeleton ] = React.useState(true);
    const load = ({ target }) => {
        setSkeleton(false)
        target.classList.add("--show");
    }

    return (
        <div className="skeleton">
        
            {skeleton && <div className="skeleton__body"></div>}
            <img
                className="skeleton__img"
                src={src}
                alt={alt}
                onLoad={load}
            />
        </div>
    );
}
