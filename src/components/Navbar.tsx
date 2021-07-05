import React from "react";
import { Link } from "react-router-dom";
import navCombat from "../img/navSword.svg";
import navMining from "../img/navPickaxe.svg";
import navFarming from "../img/navHoe.svg";

import styles from "./styles/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <aside className={styles["nav-aside"]}>
      <nav className={styles["nav"]}></nav>
    </aside>
  );
};

export default Navbar;
