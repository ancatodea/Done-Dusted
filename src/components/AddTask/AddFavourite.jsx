import styles from "./AddFavourite.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


export default function AddFavourite() {
    return (
        <span className={styles.addFavouriteContainer}>
            <FontAwesomeIcon icon={faStar} />
        </span>
    );
}