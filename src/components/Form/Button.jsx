import React from "react";

export default function Button({ children, ...residual }) {
    return (
        <button className="btn" 
        {...residual}>
            {children}
        </button>
    );
}