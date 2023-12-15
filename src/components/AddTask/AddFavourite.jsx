import styles from "./AddFavourite.module.css";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { AddTaskContext } from "../../contexts/add-task";


export default function AddFavourite({id}) {
    const {favouriteHandler} = useContext(AddTaskContext);

    const handleFavoriteClick = () => {
        favouriteHandler(id)
    }
    return (
        <span onClick={handleFavoriteClick} className={styles.addFavouriteContainer}>
            <FaHeart />
        </span>
    );
}