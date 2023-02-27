import React from "react";
import useAnimate from "../hooks/useAnimate";

export default function Home(props) {
    useAnimate();

    return (
        <main data-animate="fadeDown">
            <p>Home</p>
        </main>
    );
}
