"use client";

import React, { useEffect, useRef} from "react";
import ApexCharts from 'apexcharts'


const BarChart = () => {
//Create reference to chart to track whether chart was added to page  
var chart = null;
//Reference to access HTML returned by React
const chartRef = useRef(null);

async function initGraph(){
  try{
    //Get graph data from API
    let graphData = await fetch("http://localhost:8000/api/bar-chart/");
    graphData = await graphData.json();
    graphData = graphData[0];

    //Configure graph display settings
    var options = {
      series: [{
      name: 'Value',
      data: graphData["data"]
    }],
      chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 1,
        dataLabels: {
          position: 'top', 
        },
      }
    },
    dataLabels: {
      enabled: true,
      
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
    
    xaxis: {
      categories: graphData["categories"],
      position: 'bottom',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      tooltip: {
        enabled: true,
      }
    },
    yaxis: {
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true,
      },
      labels: {
        show: true,
      }
    
    },
    title: {
      text: 'Bar Chart',
      floating: true,
      offsetY: 0,
      align: 'center',
      style: {
        color: '#444'
      }
    }
    };


    if (chart) {
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

  return (<div ref={chartRef} id="bar-chart" className="chart"></div>);
};

export default BarChart;
