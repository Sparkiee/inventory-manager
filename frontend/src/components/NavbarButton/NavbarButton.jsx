import React from "react";
import "./NavbarButton.scss";

const NavbarButton = ({ label, color }) => {
  return (
    <button className="navbar-button" style={{ color: color ? color : "" }}>
      {label}
    </button>
  );
};

export default NavbarButton;
