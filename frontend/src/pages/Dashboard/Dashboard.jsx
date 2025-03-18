import React from "react";
import "./Dashboard.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Scanner from "../Inventory/Scanner/Scanner";
import Stat from "../../components/Stat/Stat";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard main-content">
        <h1 className="page-title">Dashboard</h1>
        <div className="statistics">
          <Stat name={"Total Items"} value={20} bgcolor={"#CDC1FF"} />
          <Stat name={"Items Sold"} value={20} bgcolor={"#B0EBB4"} />
          <Stat name={"Total Income"} value={20} bgcolor={"#F8C794"} />
          <Stat name={"Critical Items"} value={20} bgcolor={"#E5E483"} />
        </div>
      </div>
      <Scanner />
      <Footer />
    </div>
  );
};

export default Dashboard;
