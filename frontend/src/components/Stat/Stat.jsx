import React from "react";
import "./Stat.scss";

const Stat = ({ name, value, bgcolor }) => {
  return (
    <div className="stat-container" style={{ backgroundColor: bgcolor }}>
      <div className="stat-name">{name}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
};

export default Stat;
