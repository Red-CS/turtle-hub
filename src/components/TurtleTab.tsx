import React from "react";
import styles from "./styles/TurtleTab.module.css";

interface Props {
  label: string;
  timestamp: string;
  fuelLevel?: number;
}

const TurtleTab: React.FC<Props> = ({
  label,
  timestamp,
  fuelLevel = 800,
}: Props) => {
  return (
    <div className={styles["entry"]}>
      <h3 className={styles["label"]}>{label}</h3>
      <h3 className={styles["timestamp"]}>{timestamp}</h3>
      <h3 className={styles["fuel-level"]}>{fuelLevel}</h3>
    </div>
  );
};

export default TurtleTab;
