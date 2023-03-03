import React from "react";

export default function Input({
    id,
    label,
    type,
    value,
    onChange,
    error,
}) {

    return (
        <div className="input">
            <label className="input__label" htmlFor={id}>
                {label}
            </label>

            <input
                className="input__field"
                type={type}
                name={id}
                id={id}
                value={value}
                onChange={onChange}
            />

            {error && <span className="input__error">{error}</span>}
        </div>
    );
}
