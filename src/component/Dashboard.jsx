import React from "react";
import ModalCard from "./ModalCard";
import data from "../data.json";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {data.categories.map((category) => (
        <ModalCard key="category.id" category={category} />
      ))}
    </div>
  );
};

export default Dashboard;
