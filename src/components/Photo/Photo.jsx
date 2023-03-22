import React from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET, PHOTO_PAGE_GET } from "../../API";
import useFetch from "../../hooks/useFetch";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import PhotoContent from "./PhotoContent";
import Head from "../Helpers/Head";

export default function Photo() {
    const { id } = useParams();
    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {
        const { URL, options } = PHOTO_GET(id);

        request(URL, options);
    }, [id, request]);

    if (error) return <Error error={error} />;
    if (loading) return <Loading />;
    if (data) {
        return (
            <section className="photoPage container">
                <Head
                    title={data.photo.title}
                    desc={`Foto de ${data.photo.title}.`}
                />
                <PhotoContent data={data} page={true} />
            </section>
        );
    } else return null;
}
