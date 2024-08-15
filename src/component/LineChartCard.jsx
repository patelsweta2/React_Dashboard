import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components for Chart.js
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartCard = ({ widget }) => {
  // Prepare data for the chart
  const data = {
    labels: widget.variables.map((variable) => variable.var),
    datasets: [
      {
        label: widget.name,
        data: widget.variables.map((variable) => variable.amount),
        backgroundColor: widget.variables.map((variable) => variable.color),
        borderColor: widget.variables.map((variable) => variable.color),
        borderWidth: 2,
        fill: false,
        tension: 0.1, // Smooth the line
      },
    ],
  };

  // Configure chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: widget.name,
      },
    },
  };

  return (
    <div className="">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartCard;
