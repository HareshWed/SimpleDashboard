"use client";

import React, { useEffect, useRef} from "react";
import ApexCharts from 'apexcharts'


const LineChart = () => {

//Create reference to chart to track whether chart was added to page  
var chart = null;

//Reference to access HTML returned by React
const chartRef = useRef(null);

async function initGraph() {
  try{
    //Get graph data from API
    let graphData = await fetch("http://localhost:8000/api/line-chart/");
    graphData = await graphData.json();
    graphData = graphData[0];

    //Configure graph display settings
    var options = {
      series: [{
        name: "Value",
        data: graphData["data"]
    }],
      chart: {
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Line Chart',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], 
        opacity: 0.5
      },
    },
    xaxis: {
      categories: graphData["categories"],
    }
    };
    
    if(chart){
      // Destroy previous chart if it exists
      chart.destroy();
    }
    
    chart = new ApexCharts(chartRef.current, options);

    chart.render();

  }
    catch(error){
      //Display Error if one occurs
      chartRef.current.innerHTML = "Error: Could not retrieve data";
    }
  
}

  useEffect(() => {

    initGraph();
      
  }, []);

  return (<div ref={chartRef} id="line-chart" className="chart"></div>);
};

export default LineChart;
