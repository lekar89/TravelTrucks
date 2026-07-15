import CamperCard from "../CamperCard/CamperCard";
import styles from "./CamperList.module.css";

function CamperList({ campers }) {
  return (
    <ul className={styles.list}>
      {campers.map(camper => (
        <li className={styles.item} key={camper.id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
}

export default CamperList;