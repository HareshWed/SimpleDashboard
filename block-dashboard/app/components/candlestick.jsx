"use client";
import React, { useEffect, useRef} from "react";
import ApexCharts from 'apexcharts'


const CandlestickChart = () => {
    
    //Create reference to chart to track whether chart was added to page  
    var chart = null;

    //Reference to access HTML returned by React
    const chartRef = useRef(null);

    async function initGraph() {
      //Get graph data from API
      try{
        let graphData = await fetch("http://localhost:8000/api/candlestick/");
        graphData = await graphData.json();
        graphData = graphData[0];

        for (let i = 0; i < graphData["data"].length; i++){
          graphData["data"][i]["x"] = new Date(graphData["data"][i]["x"]);
        }

        //Configure graph display settings
        let options = {
            series: [{
              data:graphData["data"]
            }],
            chart: {
            type: 'candlestick',
          },
          title: {
            text: 'CandleStick Chart',
            align: 'left'
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
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
    if(chartRef){
      initGraph();
    }
    
  }, []);

  return (<div ref={chartRef} id="candle" className="chart"></div>);
};

export default CandlestickChart;
