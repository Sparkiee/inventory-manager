import React from "react";
import "./Navbar.scss";

import barcode from "../../assets/svgs/barcode.svg";
import user from "../../assets/svgs/user2.svg";

import Searchbar from "../Searchbar/Searchbar";
import { APP_NAME } from "../../constants";
import NavbarButton from "../NavbarButton/NavbarButton";
import NavbarDropdown from "../NavbarDropdown/NavbarDowndown";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-wrapper">
        <div className="logo">
          <img className="icon" src={barcode} alt="barcode icon" />
          <span className="navbar-title">{APP_NAME}</span>
        </div>
        {/* <div className="explore-menu">
          <NavbarDropdown label="Movies" onClick={() => console.log("trigger outside")} />
          <NavbarDropdown label="Shows" onClick={() => console.log("trigger outside")} />
        </div> */}
        {/* <Searchbar /> */}
        <div className="action-buttons">
          <NavbarDropdown label={"John Doe"} src={user}/>
          {/* <div className="user-profile">
            <img className="icon" src={user} alt="user icon" />
            <span>John Doe</span>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
