import React from "react";

export default function useMedia() {
    const [mobile, setMobile] = React.useState(null)
    const watch = () => {
        const { matches } = matchMedia("(max-width: 575.98px)");
        const nav = document.querySelector(".userHeader__nav");

        setMobile(matches);

        if (matches && nav) {
            const height = nav.clientHeight.toString().slice(0, -1);

            document.body.style.paddingBottom = `${height}rem`;
        }
    };

    React.useEffect(() => {
        watch();
        window.addEventListener("resize", watch);
        return () => window.removeEventListener("resize", watch);
    }, [])

    return { mobile };
}
