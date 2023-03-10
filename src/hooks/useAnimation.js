import React from "react";
import LeoAnimate from "leo-animate.js";


export function useAnimation(dependency, callbackStart, callbackEnd) {
    const animationDuration = 300;
    const animationClass = "--animated";
    const options = { 
        transitions: { duration: `${animationDuration}ms` } 
    };

    React.useEffect(() => {
        new LeoAnimate(options);

        if (callbackStart) callbackStart();
        if (callbackEnd) return () => callbackEnd();
    }, [...dependency]);

    return { animationDuration, animationClass }
}
