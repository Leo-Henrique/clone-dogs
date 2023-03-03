import React from "react";
import LeoAnimate from "leo-animate.js";


export function useAnimation(dependency, callbackStart, callbackEnd) {
    const duration = 300;
    const options = { 
        transitions: { duration: `${duration}ms` } 
    };

    React.useEffect(() => {
        new LeoAnimate(options);

        if (callbackStart) callbackStart();
        if (callbackEnd) return () => callbackEnd();
    }, [...dependency]);
}
