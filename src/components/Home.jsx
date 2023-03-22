import React from "react";
import Feed from "./Feed/Feed";
import Head from "./Helpers/Head";

export default function Home() {
    return (
        <main className="container">
            <Head
                isHome={true}
                title="Clone Cats | Leonardo Henrique"
                desc="Simulação de uma rede social de gatos, desenvolvido em React."
            />
            <Feed />
        </main>
    );
}
