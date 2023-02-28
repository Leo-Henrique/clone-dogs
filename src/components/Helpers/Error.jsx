import React from "react";

export default function Error({ error }) {
    if (error) {
        return <p className="error">{error}</p>;
    } else return null;
}
