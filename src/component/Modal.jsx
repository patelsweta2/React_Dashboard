import React from "react";
import ChartCard from "./ChartCard";

const Modal = ({ category }) => {
  return (
    <div className="modal-card">
      <h2>{category.name}</h2>
      <div className="widgets-container">
        {category.widgets.map((widget) => (
          <ChartCard key={widget.id} widget={widget} />
        ))}
      </div>
    </div>
  );
};

export default Modal;
