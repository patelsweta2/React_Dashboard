import React from "react";
import NoDataModal from "./NoDataModal";
import ChartCard from "./ChartCard";
import LineChartCard from "./LineChartCard";

const ModalCard = ({ category }) => {
  return (
    <div className="modal-card">
      <h2>{category.name}</h2>
      <div className="widgets-container">
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
