"use client";

import React, { useEffect, useRef} from "react";
import ApexCharts from 'apexcharts'


const PieChart = () => {

//Create reference to chart to track whether chart was added to page  
var chart = null;

//Reference to access HTML returned by React
const chartRef = useRef(null);

async function initGraph() {
    try{
    //Get graph data from API
    let graphData = await fetch("http://localhost:8000/api/pie-chart/");
    graphData = await graphData.json();
    graphData = graphData[0];

    //Configure graph display settings
    var options = {
      series: graphData["series"],
      chart: {
      type: 'pie',
    },
    labels: graphData["labels"],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        },
      }
    }],
    title: {
      text: 'Pie Chart',
      align: 'left'
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

  return (<div ref={chartRef} id="pie-chart" className="chart"></div>);
};

export default PieChart;
