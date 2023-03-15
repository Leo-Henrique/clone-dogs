import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPost from "./UserPost";
import UserStatistics from "./UserStatistics";
import { UserContext } from "../../UserContext";

export default function User(props) {
    const { data } = React.useContext(UserContext);

    return (
        <section className="container">
            <UserHeader />

            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="/post" element={<UserPost />} />
                <Route path="/statistics" element={<UserStatistics />} />
            </Routes>
        </section>
    );
}
