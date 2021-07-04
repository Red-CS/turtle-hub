import { useState } from "react";
import Navbar from "../components/Navbar";

const Combat: React.FC = () => {
  const [controlPanelState, setControlPanelState] = useState<boolean>(false);

  return (
    <div className="App">
      <div
        className="dim-screen"
        style={{ visibility: controlPanelState ? "visible" : "hidden" }}
      />
      <div
        className="control-panel"
        style={{ visibility: controlPanelState ? "visible" : "hidden" }}
        // ref={controlPanelRef}
      >
        {/* TODO Add stuff for the control panel */}
      </div>
      <Navbar />
      <main>
        <header>
          {/* <img src={image} alt="" /> */}
          <h1>Combat</h1>
        </header>
        <div className="turtles">
          <h2>Turtles</h2>
          <ul className="turtle-list">
            <li onClick={() => setControlPanelState(!controlPanelState)}>
              {/* <TurtleObject
                label="main"
                timestamp="timestamp"
                fuelLevel={800}
              /> */}
            </li>
            <li onClick={() => setControlPanelState(!controlPanelState)}>
              {/* <TurtleObject
                label="main"
                timestamp="timestamp"
                fuelLevel={800}
                style={{ zIndex: "-1" }}
              /> */}
            </li>
            <li onClick={() => setControlPanelState(!controlPanelState)}>
              {/* <TurtleObject
                label="main"
                timestamp="timestamp"
                fuelLevel={800}
              /> */}
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Combat;
