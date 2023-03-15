import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../API";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import { useAnimation } from "../../hooks/useAnimation";

export default function FeedPhotos({ user, setModalPhoto }) {
    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {
        const requestPhotos = async () => {
            const photos = { 
                page: 1,
                total: 6,
                user
            }
            const { URL, options } = PHOTOS_GET(photos);
            const { response, data } =  await request(URL, options);
    
        }

        requestPhotos();
    }, [request, user]);
    
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