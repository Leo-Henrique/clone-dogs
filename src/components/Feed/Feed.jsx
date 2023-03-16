import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

export default function Feed({ user }) {
    const [modalPhoto, setModalPhoto] = React.useState(null);
    const [pages, setPages] = React.useState([1, 2]);
    const [infinite, setInfinite] = React.useState(true);

    React.useEffect(() => {
        let wait;
        const infiniteScroll = (event) => {
            if (infinite) {
                const scroll = scrollY;
                const height = document.body.offsetHeight - innerHeight;
    
                if (scroll > height * .75 && !wait) {
                    setPages((pages) => [...pages, pages.length + 1]);
                    wait = true;
                    setTimeout(() => wait = true, 500)
                }
            }
        };
        const addEvents = (add) => {
            const events = ["wheel", "scroll"];

            events.forEach((event) => {
                if (add) window.addEventListener(event, infiniteScroll);
                else window.removeEventListener(event, infiniteScroll);
            });
        };

        addEvents(true);

        return () => addEvents(false);
    }, []);

    return (
        <>
            {modalPhoto && (
                <FeedModal
                    photo={modalPhoto}
                    setModalPhoto={setModalPhoto}
                />
            )}

            {pages.map(page => (
                <FeedPhotos
                    key={page}
                    user={user}
                    page={page}
                    setModalPhoto={setModalPhoto}
                    setInfinite={setInfinite}
                />
            ))}
        </>
    );
}
