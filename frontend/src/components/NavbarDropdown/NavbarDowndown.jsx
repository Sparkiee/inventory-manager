import React, { useState } from "react";
import "./NavbarDropdown.scss";
import dropdown from "../../assets/svgs/dropdown.svg";

const NavbarDropdown = ({ label, src }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="navbar-dropdown"
      onClick={() => {
        setIsOpen(!isOpen);
        console.log(label);
      }}>
      <img className="icon" src={src} alt="icon" />
      <span className="dropdown-text">{label}</span>
      <img className={`icon ${isOpen ? "is-open" : ""}`} src={dropdown} alt="dropdown icon" />
    </div>
  );
};

export default NavbarDropdown;
