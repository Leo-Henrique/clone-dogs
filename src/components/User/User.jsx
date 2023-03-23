import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPost from "./UserPost";
import UserStats from "./UserStats";
import { UserContext } from "../../UserContext";
import { NotFound } from "../NotFound";
import Head from "../Helpers/Head";

export default function User(props) {
    const { data } = React.useContext(UserContext);

    return (
        <section className="container">
            <Head title="Minha conta" desc="Publicações da sua conta." />
            <UserHeader />

            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="/post" element={<UserPost />} />
                <Route path="/statistics" element={<UserStats />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </section>
    );
}
