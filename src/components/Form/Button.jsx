import React from "react";

export default function Button({ onClick, loading, text, loadingText, className }) {
    return (
        <button className={className ? className : "btn"}
        type="button"
        disabled={loading}
        onClick={onClick}>
            {loading ? loadingText : text}
        </button>
    );
}