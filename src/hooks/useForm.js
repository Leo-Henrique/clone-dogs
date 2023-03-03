import React from "react";

const validation = {
    email: {
        regex: /leonardo/,
        msg: "O e-mail é inválido!"
    },
    number: {
        regex: /^\d{1,3}$/,
        msg: "Utilize números válidos!"
    }
}

export default function useForm(type) {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState(null);
    const validate = () => {
        const current = validation[type];

        if (type == false) return true;
        if (!value.length) {
            setError("O campo não pode estar vazio!");
            return false;
        } else if (current && current.regex.test(value)) {
            setError(current.msg);
            return false;
        } else {
            setError(null);
            return true;
        }
    }
    const onChange = ({ target: { value } }) => {
        setValue(value);
        if (error) validate(value);
    };

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(),
        submit: () => validate()
    }
}
 