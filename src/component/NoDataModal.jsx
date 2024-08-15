import React from "react";

const NoDataModal = ({ widget }) => {
  if (widget.type !== "none") return null;
  return (
    <div className="no-data-modal">
      <h3>{widget.name}</h3>
      <div className="image-container">
        <img src="../../public/graph.png" alt="No data Available" />
      </div>
    </div>
  );
};

export default NoDataModal;
