import React from "react";
import LeoAnimate from "leo-animate.js";

export default function useAnimate() {
    React.useEffect(() => {
        new LeoAnimate({ transitions: { duration: "300ms" } });
    }, [])
}
