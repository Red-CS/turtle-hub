import styles from "./styles/FilterObject.module.css";

const FilterObject = (props: { filterName: string }) => {
  return <div className={styles["container"]}>{props.filterName}</div>;
};

export default FilterObject;
