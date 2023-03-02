import React from "react";

export default function useMedia() {
    const [mobile, setMobile] = React.useState(null)
    const watch = () => {
        const { matches } = matchMedia("(max-width: 575.98px)");

        setMobile(matches);
    };

    React.useEffect(() => {
        watch();
        window.addEventListener("resize", watch);
        return () => window.removeEventListener("resize", watch);
    }, [])

    return { mobile };
}
