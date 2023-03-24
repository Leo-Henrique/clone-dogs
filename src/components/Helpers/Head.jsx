import React from "react";

export default function Head({ title, desc, isHome }) {
    React.useEffect(() => {
        const ogTitle = document.querySelector(
            `meta[property="og:title"]`
        );
        const description = [
            document.querySelector(`meta[name="description"]`),
            document.querySelector(`meta[property="og:description"]`),
        ];
        const URL = [
            document.querySelector(`link[rel="canonical"]`),
            document.querySelector(`meta[property="og:url"]`),
            document.querySelector(`meta[property="og:image"]`),
        ];

        if (isHome) {
            document.title = title;
            ogTitle.setAttribute("content", title);
        } else {
            document.title = `${title} | Clone Dogs`;
            ogTitle.setAttribute("content", `${title} | Clone Dogs`);
        }
        description.forEach((element) =>
            element.setAttribute("content", desc)
        );
        URL[0].setAttribute("href", location.href);
        URL[1].setAttribute("content", location.href);
        URL[2].setAttribute(
            "content",
            `${location.origin}/assets/og-image.png`
        );
    }, []);

    return <></>;
}
