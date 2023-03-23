import React from "react";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

export default function UserStatsGraphs({ data }) {
    const [graph, setGraph] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        const acessos = data.map(({ acessos }) => +acessos);
        const graphData = data.map((item) => {
            return {
                x: item.title,
                y: +item.acessos,
            };
        });

        if (data.length) {
            setGraph(graphData);
            setTotal(acessos.reduce((acc, num) => acc + num));
        }
    }, [data]);

    return (
        <section className="graph">
            {data.length ? (
                <>
                    <div className="graph__item graph__total">
                        <p>Acessos: {total}</p>
                    </div>

                    <div className="graph__item">
                        <VictoryPie
                            data={graph}
                            innerRadius={50}
                            padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
                            style={{
                                data: {
                                    fillOpacity: 0.9,
                                    stroke: "#FFF",
                                    strokeWidth: 2,
                                },
                                labels: {
                                    fontSize: 14,
                                    fill: "#333",
                                },
                            }}
                        />
                    </div>

                    <div className="graph__item">
                        <VictoryChart>
                            <VictoryBar
                                data={graph}
                                alignment="start"
                            ></VictoryBar>
                        </VictoryChart>
                    </div>
                </>
            ) : (
                <p className="graph__warning">
                    Não é possível exibir as estatísticas sem publicações!
                </p>
            )}

        </section>
    );
}
