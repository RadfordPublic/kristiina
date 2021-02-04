import React from 'react';
import './ExploreContainer.css';

/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const {useRef} = React;

const CHART_ID = 'gender_chart';

const data = [ {
    "Gender": "Male",
    "People": 95
},{
    "Gender": "Female",
    "People": 5
}
];

const GenderDonutChart: React.FC = () => {
    const chartRef = useRef(null);

    React.useEffect(() => {
        if (!chartRef.current) {
            // @ts-ignore
            chartRef.current = am4core.create(CHART_ID, am4charts.PieChart);
            // @ts-ignore
            chartRef.current.data = data;


            // Add and configure Series
            // @ts-ignore
            let pieSeries = chartRef.current.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "People";
            pieSeries.dataFields.category = "Gender";
            pieSeries.slices.template.stroke = am4core.color("#fff");
            pieSeries.slices.template.strokeOpacity = 1;
            // Disabling labels and ticks on inner circle
            pieSeries.labels.template.disabled = true;
            pieSeries.ticks.template.disabled = true;

            // This creates initial animation
            pieSeries.hiddenState.properties.opacity = 1;
            pieSeries.hiddenState.properties.endAngle = -90;
            pieSeries.hiddenState.properties.startAngle = -90;

            // @ts-ignore
            chartRef.current.hiddenState.properties.radius = am4core.percent(0);

            // add legend
            // @ts-ignore
            chartRef.current.legend = new am4charts.Legend();
            // @ts-ignore
            chartRef.current.legend.position = "right";

            // add donut
            // @ts-ignore
            chartRef.current.innerRadius = am4core.percent(30);

            // Add cursor
            // @ts-ignore
            chartRef.current.cursor = new am4charts.XYCursor();
        }

        return () => {
            // @ts-ignore
            chartRef.current && chartRef.current.dispose();
        };
    }, []);

    // Load data into chart
    React.useEffect(() => {
        if (chartRef.current) {
            // @ts-ignore
            chartRef.current.data = data;
        }
    }, []);

    // Handle component unmounting, dispose chart
    React.useEffect(() => {
        return () => {
            // @ts-ignore
            chartRef.current && chartRef.current.dispose();
        };
    }, []);

    return <div
        id={CHART_ID}
        style={{
            width: '100%',
            height: '300px',
            margin: '50px 0'
        }}
    />
}

export default GenderDonutChart;
