import React from 'react';

/* Imports */
import {ResponsiveLine} from '@nivo/line'


const ClicksNivo: React.FC = () => {
    return (
        <ResponsiveLine
            data={[
                {
                    id: 'Mobile',
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
                    id: 'Desktop',
                    data: [
                        { x: '2021-01-01', y: 45 },
                        { x: '2021-01-02', y: 53 },
                        { x: '2021-01-03', y: 71 },
                        { x: '2021-01-04', y: 24 },
                        { x: '2021-01-05', y: 64 },
                        { x: '2021-01-06', y: 95 },
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
                useUTC: false,
                precision: 'day',
            }}
            xFormat="time:%Y-%m-%d"
            yScale={{
                type: 'linear',
                stacked: false,
            }}
            axisBottom={{
                format: '%b %d',
                tickValues: 'every 2 days',
                legend: 'time scale',
                legendOffset: -12,
            }}
            curve={'linear'}
            colors={{scheme: 'paired'}}
            useMesh={true}
            enableSlices={false}
            margin={{ top: 30, right: 110, bottom: 30, left: 60 }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            pointColor={{ theme: 'background' }}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    );
}

export default ClicksNivo;
