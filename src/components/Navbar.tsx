import React from "react";
import { Link } from "react-router-dom";
import navCombat from "../img/navSword.svg";
import navMining from "../img/navPickaxe.svg";
import navFarming from "../img/navHoe.svg";

import styles from "./styles/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <aside className={styles["nav-aside"]}>
      <nav className={styles["nav"]}>
        <ul className={styles["nav-ul"]}>
          <li>
            <Link to="/">
              <img
                src={navCombat}
                alt="Nav sword"
                className={styles["nav-icon"]}
              />
            </Link>
          </li>
          <li>
            <Link to="/mining">
              <img
                src={navMining}
                alt="Nav sword"
                className={styles["nav-icon"]}
              />
            </Link>
          </li>
          <li>
            <Link to="/farming">
              <img
                src={navFarming}
                alt="Nav sword"
                className={styles["nav-icon"]}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
