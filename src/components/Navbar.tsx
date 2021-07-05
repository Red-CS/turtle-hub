import React from "react";

import styles from "./styles/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <aside className={styles["nav-aside"]}>
      <nav className={styles["nav"]}></nav>
    </aside>
  );
};

export default Navbar;
