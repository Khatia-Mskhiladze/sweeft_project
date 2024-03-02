import React from "react";
import { Link } from "react-router-dom";
import Styles from "../header/Header.module.css"

const Header = () => {
  return (
    <div className={Styles.headerStyles}>
      <Link to="/"><button>Home</button></Link>
      <Link to="history"><button>History</button></Link>
    </div>
  );
};

export default Header;
