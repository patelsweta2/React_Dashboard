import React from "react";
import NoDataModal from "./NoDataModal";
import ChartCard from "./ChartCard";
import LineChartCard from "./LineChartCard";

const ModalCard = ({ category }) => {
  return (
    <div className="w-full flex flex-col m-2">
      <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
      <div className="w-11/12 lg:w-10/12 flex flex-row gap-6">
        {category.widgets.map((widget) => {
          if (widget.type === "none") {
            return <NoDataModal key={widget.id} widget={widget} />;
          } else if (widget.type === "circleGraph") {
            return <ChartCard key={widget.id} widget={widget} />;
          } else {
            return <LineChartCard key={widget.id} widget={widget} />;
          }
        })}
      </div>
    </div>
  );
};

export default ModalCard;
