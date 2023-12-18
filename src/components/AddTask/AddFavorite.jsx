import styles from "./AddFavorite.module.css";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { AddTaskContext } from "../../contexts/add-task";


export default function AddFavorite({id, favorite}) {
    const {favoriteHandler} = useContext(AddTaskContext);

    const handleFavoriteClick = () => {
        favoriteHandler(id)
    }
    return (
        <span
            onClick={handleFavoriteClick}
            className={`${styles.addFavoriteContainer} ${
                favorite ? styles.favoriteActive : ""
            }`}
        >
            <FaHeart />
        </span>
    );
}