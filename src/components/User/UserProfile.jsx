import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import Head from "../Helpers/Head";

export default function UserProfile() {
    const { user } = useParams();

    return (
        <section className="container">
            <Head
                title={user}
                desc={`Publicações do usuário ${user}.`}
            />
            <h1 className="h1">{user}</h1>

            <Feed user={user} />
        </section>
    );
}
