import React from "react";
import "./Footer.scss";
import { APP_NAME } from "../../constants";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 {APP_NAME}</p>
    </footer>
  );
};

export default Footer;
