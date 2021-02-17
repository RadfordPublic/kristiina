import React from 'react';

/* Imports */
import {ResponsiveScatterPlot} from '@nivo/scatterplot'


const EngagementNivo: React.FC = () => {
    return (
        <ResponsiveScatterPlot
            data={[
                {
                    id: 'Instagram',
                    data: [
                        { x: '2021-01-01', y: 35 },
                        { x: '2021-01-02', y: 33 },
                        { x: '2021-01-03', y: 41 },
                        { x: '2021-01-04', y: 57 },
                        { x: '2021-01-05', y: 42 },
                        { x: '2021-01-06', y: 46 },
                        { x: '2021-01-07', y: 63 },
                        { x: '2021-01-08', y: 53 },
                        { x: '2021-01-09', y: 52 },
                        { x: '2021-01-10', y: 70 },
                        { x: '2021-01-11', y: 79 },
                    ],
                },
                {
                    id: 'Facebook',
                    data: [
                        { x: '2021-01-01', y: 45 },
                        { x: '2021-01-02', y: 53 },
                        { x: '2021-01-03', y: 71 },
                        { x: '2021-01-04', y: 24 },
                        { x: '2021-01-05', y: 64 },
                        { x: '2021-01-06', y: 55 },
                        { x: '2021-01-07', y: 81 },
                        { x: '2021-01-08', y: 60 },
                        { x: '2021-01-09', y: 82 },
                        { x: '2021-01-10', y: 63 },
                        { x: '2021-01-11', y: 79 },
                    ],
                },
            ]}
            xScale={{
                type: 'time',
                format: '%Y-%m-%d',
                precision: 'day',
            }}
            xFormat="time:%Y-%m-%d"
            axisBottom={{
                format: '%b %d',
                tickValues: 'every 2 days',
            }}
            margin={{ top: 30, right: 140, bottom: 30, left: 90 }}
            yScale={{ type: 'linear', min: 0, max: 'auto' }}
            yFormat={function(e){return e+" "}}
            blendMode="multiply"
            colors={{scheme: 'paired'}}
            axisTop={null}
            axisRight={null}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'hits',
                legendPosition: 'middle',
                legendOffset: -60
            }}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 130,
                    translateY: 0,
                    itemWidth: 100,
                    itemHeight: 12,
                    itemsSpacing: 5,
                    itemDirection: 'left-to-right',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    );
}

export default EngagementNivo;
