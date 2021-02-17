import React from 'react';

/* Imports */
import {ResponsiveHeatMap} from '@nivo/heatmap'


const StoryNivo: React.FC = () => {
    return (
        <ResponsiveHeatMap
            data={[
                {
                    "story": "Story 1",
                    'Monday': Math.round(Math.random()*12),
                    'Tuesday': Math.round(Math.random()*12),
                    'Wednesday': Math.round(Math.random()*12),
                    'Thursday': Math.round(Math.random()*12),
                    'Friday': Math.round(Math.random()*12),
                    'Saturday': Math.round(Math.random()*12),
                    'Sunday': Math.round(Math.random()*12)
                },
                {
                    "story": "Story 2",
                    'Monday': Math.round(Math.random()*12),
                    'Tuesday': Math.round(Math.random()*12),
                    'Wednesday': Math.round(Math.random()*12),
                    'Thursday': Math.round(Math.random()*12),
                    'Friday': Math.round(Math.random()*12),
                    'Saturday': Math.round(Math.random()*12),
                    'Sunday': Math.round(Math.random()*12)
                },
                {
                    "story": "Story 3",
                    'Monday': Math.round(Math.random()*12),
                    'Tuesday': Math.round(Math.random()*12),
                    'Wednesday': Math.round(Math.random()*12),
                    'Thursday': Math.round(Math.random()*12),
                    'Friday': Math.round(Math.random()*12),
                    'Saturday': Math.round(Math.random()*12),
                    'Sunday': Math.round(Math.random()*12)
                },
                {
                    "story": "Story 4",
                    'Monday': Math.round(Math.random()*12),
                    'Tuesday': Math.round(Math.random()*12),
                    'Wednesday': Math.round(Math.random()*12),
                    'Thursday': Math.round(Math.random()*12),
                    'Friday': Math.round(Math.random()*12),
                    'Saturday': Math.round(Math.random()*12),
                    'Sunday': Math.round(Math.random()*12)
                },
                {
                    "story": "Story 5",
                    'Monday': Math.round(Math.random()*12),
                    'Tuesday': Math.round(Math.random()*12),
                    'Wednesday': Math.round(Math.random()*12),
                    'Thursday': Math.round(Math.random()*12),
                    'Friday': Math.round(Math.random()*12),
                    'Saturday': Math.round(Math.random()*12),
                    'Sunday': Math.round(Math.random()*12)
                },
                {
                    "story": "Story 6",
                    'Monday': Math.round(Math.random()*12),
                    'Tuesday': Math.round(Math.random()*12),
                    'Wednesday': Math.round(Math.random()*12),
                    'Thursday': Math.round(Math.random()*12),
                    'Friday': Math.round(Math.random()*12),
                    'Saturday': Math.round(Math.random()*12),
                    'Sunday': Math.round(Math.random()*12)
                },
                {
                    "story": "Story 7",
                    'Monday': Math.round(Math.random()*12),
                    'Tuesday': Math.round(Math.random()*12),
                    'Wednesday': Math.round(Math.random()*12),
                    'Thursday': Math.round(Math.random()*12),
                    'Friday': Math.round(Math.random()*12),
                    'Saturday': Math.round(Math.random()*12),
                    'Sunday': Math.round(Math.random()*12)
                },
            ]}
            keys={[
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ]}
            indexBy="story"
            margin={{ top: 30, right: 60, bottom: 60, left: 60 }}
            forceSquare={false}
            axisBottom={{ orient: 'top', tickSize: 5, tickPadding: 5, tickRotation: -70, legend: '', legendOffset: 36 }}
            axisRight={null}
            axisTop={null}
            cellOpacity={1}
            cellBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.8 ] ] }}
            animate={true}
            motionStiffness={80}
            motionDamping={9}
            hoverTarget="cell"
            cellHoverOthersOpacity={0.5}
        />
    );
}

export default StoryNivo;
