import React from 'react';

/* Imports */
import {ResponsiveBar} from '@nivo/bar'

const data = [
    {
        "insight": "True Reach",
        "value": 66
    },
    {
        "insight": "True Engagement",
        "value": 4.5
    },
    {
        "insight": "Audience credibility",
        "value": 75
    },
    {
        "insight": "Audience reachability",
        "value": 81
    },
    {
        "insight": "Ad to content ratio",
        "value": 16
    }
];

const InsightsNivo: React.FC = () => {
    return (
        <ResponsiveBar
            data={data}
            keys={['value']}
            indexBy="insight"
            margin={{top: 0, right: 50, bottom: 50, left: 130}}
            padding={0.3}
            layout="horizontal"
            valueScale={{type: 'linear'}}
            indexScale={{type: 'band', round: true}}
            colors={{scheme: 'paired'}}
            borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
            axisTop={null}
            axisRight={null}
            defs={[
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#83cdd9',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'value'
                    },
                    id: 'lines'
                }
            ]}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{from: 'color', modifiers: [['darker', 1.6]]}}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    );
}

export default InsightsNivo;
