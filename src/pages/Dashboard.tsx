import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import Navbar from "../components/Navbar";
import styles from "./styles/Dashboard.module.css";
import TurtleTab from "../components/TurtleTab";
import useKeypress from "react-use-keypress";
import LogoIcon from "../components/LogoIcon";
import LogoText from "../components/LogoText";
import ServerStatusIcon from "../components/ServerStatusIcon";

type KeyPressEvent = {
  key: string;
};

const Dashboard = () => {
  var TurtleTabArray = [];
  for (var i = 0; i < 9; i++) {
    TurtleTabArray.push(<TurtleTab label="main" status={false} />);
  }

  const [controlPanelState, setControlPanelState] = useState<boolean>(false);
  const controlPanelRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(controlPanelRef, () => setControlPanelState(false));

  useKeypress(["Escape", "ArrowUp"], (event: KeyPressEvent) => {
    switch (event.key) {
      case "Escape":
        setControlPanelState(false);
        break;

      case "ArrowUp":
        console.log("Up");
    }
  });

  return (
    <div className={styles["page"]}>
      <Navbar />
      <main>
        <header>
          <LogoIcon />
          <LogoText />
        </header>
        <div className={styles["turtles"]}>
          <h2>Turtles</h2>
          <ul className={styles["turtle-list"]}>
            {TurtleTabArray.map((turtle, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setControlPanelState(!controlPanelState)}
                >
                  {turtle}
                </li>
              );
            })}
          </ul>
        </div>
        <ServerStatusIcon />
      </main>
    </div>
  );
};

export default Dashboard;
