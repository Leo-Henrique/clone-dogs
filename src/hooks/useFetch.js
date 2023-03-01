import React from "react";

export default function useFetch(props) {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const request = React.useCallback(async (URL, options) => {
        let response;
        let data;

        try {
            setError(null);
            setLoading(true);
            response = await fetch(URL, options);
            data = await response.json();

            if (!response.ok) throw new Error(data.message);

        } catch (error) {
            setData(null);
            setError(error.message);

        } finally {
            setData(data);
            setLoading(false);
            return { response, data }
        }

    }, []);

    return {
        data,
        error,
        loading,
        request
    };
}
