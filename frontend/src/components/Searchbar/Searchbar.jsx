import React from "react";
import "./Searchbar.scss";
import { APP_NAME } from "../../constants";

import search from "../../assets/svgs/search.svg";

const Searchbar = () => {
return (
    <div className="searchbar">
        <input type="text" placeholder={`Search ${APP_NAME}`} />
        <img className="search-icon" src={search} alt="search icon" />
    </div>
);
};

export default Searchbar;
