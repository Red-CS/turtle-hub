import { useState } from "react";
import styles from "./styles/TurtleTab.module.css";
import IronSword from "./IronSword";

interface Props {
  label: string;
  status: boolean;
  fuelLevel?: number | string;
}

const TurtleTab = ({ label, status, fuelLevel = 800 }: Props) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div
      className={styles["turtle-tab"]}
      onClick={() => setSelected(!selected)}
      style={{
        backgroundColor: selected
          ? "var(--turtle-active)"
          : "var(--turtle-inactive)",
      }}
    >
      <div className={styles["container"]}>
        <span className={styles["left"]}>
          <IronSword />
          <h3
            className={styles["label"]}
            style={{
              color: selected
                ? "var(--turtle-inactive)"
                : "var(--turtle-active)",
            }}
          >
            {label}
          </h3>
        </span>
        <span className={styles["right"]}>
          <svg
            className={styles["status-light"]}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="#FF8282" />
          </svg>
          <p
            style={{
              color: selected
                ? "var(--turtle-inactive)"
                : "var(--turtle-active)",
            }}
          >
            {fuelLevel}
          </p>
        </span>
      </div>
    </div>
  );
};

export default TurtleTab;
