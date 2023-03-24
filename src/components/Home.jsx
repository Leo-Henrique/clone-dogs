import React from "react";
import Feed from "./Feed/Feed";
import Head from "./Helpers/Head";

export default function Home() {
    return (
        <main className="container">
            <Head
                isHome={true}
                title="Clone Dogs | Leonardo Henrique"
                desc="Simulação de uma rede social de cachorros, desenvolvido em React."
            />
            <Feed />
        </main>
    );
}
