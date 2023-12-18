import CardTitle from "./CardTitle";
import styles from "./Card.module.css"
import DoneButton from "../AddTask/DoneButton";
import AddFavorite from "../AddTask/AddFavorite";
import DeleteButton from "../AddTask/DeleteButton";

export default function Card({todo, id, completed, favorite}) {
    
    return (
        <div className={styles.cardContainer}>
            <div className={styles.titleContainer}>
                <CardTitle cardTitle={todo} />
                <div className={styles.favoriteContainer}>
                    <AddFavorite id={id} favorite={favorite} />
                </div>
            </div>
            <div className={styles.doneDeleteConatiner}>
                <DoneButton id={id} completed={completed} />
                <DeleteButton id={id} />
            </div>
        </div>
    );
}   


