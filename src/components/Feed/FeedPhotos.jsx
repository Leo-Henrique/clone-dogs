import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../API";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import { useAnimation } from "../../hooks/useAnimation";
import useMedia from "../../hooks/useMedia";

export default function FeedPhotos({ user, page, setModalPhoto, setInfinite }) {
    const { data, loading, error, request } = useFetch();
    const [total, setTotal] = React.useState();
    const handleTotal = () => {
        if (matchMedia("(max-width: 575.98px)").matches)
            setTotal(10)
        else
            setTotal(9);
    }

    useMedia(handleTotal, [total]);
    React.useEffect(() => {
        const requestPhotos = async () => {
            if (total) {
                const photos = { page, total, user };
                const { URL, options } = PHOTOS_GET(photos);
                const { response, data } =  await request(URL, options);
                const responseOk = response && response.ok;
        
                if (responseOk && data.length < total) setInfinite(false);
            }
        }

        requestPhotos();
    }, [request, user, page, setInfinite, total]);
    
    useAnimation([loading]);

    if (data) 
        return (
            <ul className="feed"
            data-animate="fadeRight">
                {data.map(photo => (
                    <FeedPhotosItem
                    key={photo.id}
                    photo={photo}
                    setModalPhoto={setModalPhoto}
                     />
                ))}
            </ul>
        );
    else if (error) 
        return <Error error={error} />
    else if (loading)
        return <Loading />
    else
        return null
}