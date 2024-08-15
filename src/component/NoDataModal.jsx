import React from "react";

const NoDataModal = ({ widget }) => {
  if (widget.type !== "none") return null;
  return (
    <div className="">
      <h3>{widget.name}</h3>
      <div className="">
        <img src="../../public/graph.png" alt="No data Available" />
      </div>
    </div>
  );
};

export default NoDataModal;
