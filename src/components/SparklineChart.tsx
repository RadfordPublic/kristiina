import React from 'react';
import './ExploreContainer.css';

/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const {useRef} = React;

const CHART_ID = 'population_chart';

const data = [
    {
        year: "1990",
        population: 730830065,
    },
    {
        year: "1995",
        population: 732194921,
    },
    {
        year: "2000",
        population: 735281836,
    },
    {
        year: "2005",
        population: 736717375,
    },
    {
        year: "2010",
        population: 743090810,
    },
    {
        year: "2018",
        population: 751612093,
    },
];

const SparklineChart: React.FC = () => {
    const chartRef = useRef(null);

    React.useEffect(() => {
        if (!chartRef.current) {
            // @ts-ignore
            chartRef.current = am4core.create(CHART_ID, am4charts.XYChart);
            // @ts-ignore
            chartRef.current.data = data;

            // Add X Axis
            // @ts-ignore
            let xAxis = chartRef.current.xAxes.push(new am4charts.CategoryAxis());
            xAxis.dataFields.category = "year";
            xAxis.renderer.cellStartLocation = 0.1;
            xAxis.renderer.cellEndLocation = 0.9;
            xAxis.renderer.grid.template.strokeOpacity = 0;
            xAxis.renderer.labels.template.fill = am4core.color('#ced1e0');
            xAxis.renderer.labels.template.fontSize = 12;

            // Add Y Axis
            // @ts-ignore
            let yAxis = chartRef.current.yAxes.push(new am4charts.ValueAxis());
            yAxis.renderer.grid.template.stroke = am4core.color('#f0f2fa');
            yAxis.renderer.grid.template.strokeOpacity = 1;
            yAxis.renderer.labels.template.fill = am4core.color('#ced1e0');
            yAxis.renderer.labels.template.fontSize = 12;

            // Create series
            // @ts-ignore
            let series = chartRef.current.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = "population";
            series.dataFields.categoryX = "year";
            series.name = "Population";
            series.fillOpacity = 1;
            series.fill = am4core.color('#e5408f');
            series.strokeWidth = 0;
            series.columns.template.column.cornerRadiusTopLeft = 5;
            series.columns.template.column.cornerRadiusTopRight = 5;


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

export default SparklineChart;
