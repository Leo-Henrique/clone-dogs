import React from "react";

const breakpointSm = "(max-width: 575.98px)";

export default function useMedia(callback, breakpoint = breakpointSm) {
    const [media, setMedia] = React.useState(null)
    const watch = () => {
        const { matches } = matchMedia(breakpoint);

        setMedia(matches);
        if (callback) callback();
    };

    React.useEffect(() => {
        watch();
        window.addEventListener("resize", watch);
        return () => window.removeEventListener("resize", watch);
    }, [])

    return { media };
}
