import React from 'react';
import '../ExploreContainer.css';

/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";

const {useRef} = React;

const CHART_ID = 'word_chart';

const WordChart: React.FC = () => {
    const chartRef = useRef(null);

    React.useEffect(() => {
        if (!chartRef.current) {
            // @ts-ignore
            chartRef.current = am4core.create(CHART_ID, am4plugins_wordCloud.WordCloud);

            // Add X Axis
            // @ts-ignore
            let series = chartRef.current.series.push(new am4plugins_wordCloud.WordCloudSeries());

            series.accuracy = 4;
            series.step = 15;
            series.rotationThreshold = 0.7;
            series.maxCount = 200;
            series.minWordLength = 2;
            series.labels.template.tooltipText = "{word}: {value}";
            series.fontFamily = "arial";
            series.maxFontSize = am4core.percent(30);
            series.text = "Makeup tutorials Firming body creams MAFS Firming body creams MAFS Pretty Little Thing Sportswear Natural Makeup Hair Vitamins Mineral Makeup Winery Natural SPF Fitspo Makeup Hair Vitamins Mineral Makeup Winery Natural SPF Fitspo Celebrity Apprentice Bondi Sands tutorials Firming body creams MAFS Pretty Little Thing Sportswear Natural Makeup Hair Vitamins Mineral Winery  Sportswear Natural Makeup Hair Vitamins Mineral Winery SPF Fitspo Celebrity Apprentice Bondi Sands";
        }

        return () => {
            // @ts-ignore
            chartRef.current && chartRef.current.dispose();
        };
    }, []);

    // Load data into chart
    React.useEffect(() => {
        if (chartRef.current) {
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
            height: '250px',
            margin: 'Fitspopx 0'
        }}
    />
}

export default WordChart;
