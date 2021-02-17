import React from 'react';

/* Imports */
import {ResponsiveBar} from '@nivo/bar'

const data = [
    {
        "affinity": "Fashion: clothing",
        "value": 72
    },
    {
        "affinity": "Beauty: Makeup",
        "value": 92
    },
    {
        "affinity": "Personal Brand",
        "value": 79
    },
    {
        "affinity": "Film/TV: Reality",
        "value": 84
    }
];

const AffinityNivo: React.FC = () => {
    return (
        <ResponsiveBar
            data={data}
            keys={['value']}
            indexBy="affinity"
            margin={{top: 0, right: 50, bottom: 50, left: 130}}
            padding={0.3}
            layout="horizontal"
            valueScale={{type: 'linear'}}
            indexScale={{type: 'band', round: true}}
            colors={{scheme: 'paired'}}
            borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
            axisTop={null}
            axisRight={null}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{from: 'color', modifiers: [['darker', 1.6]]}}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    );
}

export default AffinityNivo;
