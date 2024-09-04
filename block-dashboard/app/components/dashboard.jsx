"use client";

import CandlestickChart from "./candlestick";
import LineChart from "./linechart";
import BarChart from "./barchart";
import PieChart from "./piechart";



const Dashboard = () => {

    return (
        <div id="dashboard" className="grid grid-cols-2 gap-24 place-content-stretch">
            <CandlestickChart/>
            <LineChart/>
            <BarChart/>
            <PieChart/>
        </div>
    )

}

export default Dashboard;

