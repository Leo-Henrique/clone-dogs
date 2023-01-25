import React from "react";

export default function Input({ id, label, ...residual }) {
    return (
        <div className="input">
            <label className="input__label"
            htmlFor={id}>
                {label}
            </label>

            <input className="input__field"
            name={id}
            id={id}
            {...residual} />

            <span className="input__error"
            >Error</span>
        </div>
    );
}
