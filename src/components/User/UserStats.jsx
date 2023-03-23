import React from "react";
import useFetch from "../../hooks/useFetch";
import { STATS_GET } from "../../API";
import Loading from "../Helpers/Loading";
import Error from "../Helpers/Error";
import Head from "../Helpers/Head";
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

export default function UserStats(props) {
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        const getData = async () => {
            const { token } = localStorage;
            const { URL, options } = STATS_GET(token);

            request(URL, options);
        };

        getData();
    }, [request]);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    if (data) {
        return (
            <React.Suspense fallback={<></>}>
                <Head title="Estatísticas" desc="Estatísticas do usuário" />

                <UserStatsGraphs data={data} />
            </React.Suspense>
        );
    } else return null;
}
