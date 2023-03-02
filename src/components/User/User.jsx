import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPost from "./UserPost";
import UserStatistics from "./UserStatistics";

export default function User(props) {
    return (
        <section className="container">
            <UserHeader />

            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/post" element={<UserPost />} />
                <Route path="/statistics" element={<UserStatistics />} />
            </Routes>
        </section>
    );
}
