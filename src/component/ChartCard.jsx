import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartCard = ({ widget }) => {
  if (widget.type !== "circleGraph") return null;

  const totalAmount = widget.variables.reduce(
    (sum, variable) => sum + variable.amount,
    0
  );

  const data = {
    labels: widget.variables.map((variable) => variable.var),
    datasets: [
      {
        data: widget.variables.map((variable) => variable.amount),
        backgroundColor: widget.variables.map((variable) => variable.color),
        borderColor: widget.variables.map((variable) => variable.color),
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="chart-card">
      <h3>{widget.name}</h3>
      <Doughnut
        data={data}
        options={{
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.label || "";
                  const value = context.raw;
                  const percentage = ((value / totalAmount) * 100).toFixed(2);
                  return `${label}: ${value} (${percentage}%)`;
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ChartCard;
