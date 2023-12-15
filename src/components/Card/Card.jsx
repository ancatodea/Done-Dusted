import CardTitle from "./CardTitle";
import styles from "./Card.module.css"
import CardDescription from "./CardDescription";
import DoneButton from "../AddTask/DoneButton";
import AddFavourite from "../AddTask/AddFavourite";
import DeleteButton from "../AddTask/DeleteButton";

export default function Card({title, id, completed, favourite}) {
    
    return (
        <div className={styles.cardContainer}>
            <CardTitle cardTitle={title} />
            <AddFavourite id={id} favourite={favourite} />
            <CardDescription cardDescription="Here will be displayed the task" />
            <DoneButton id={id} completed ={completed} />
            <DeleteButton id={id} />
        </div>
    );
}   


