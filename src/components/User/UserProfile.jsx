import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";

export default function UserProfile() {
    const { user } = useParams();

    return (
        <section className="container">
            <h1 className="h1">
                {user}
            </h1>

            <Feed />
        </section>
    );
}
