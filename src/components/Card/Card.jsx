import CardTitle from "./CardTitle";
import styles from "./Card.module.css"
import CardDescription from "./CardDescription";

export default function Card() {
    return (
        <div className={styles.cardContainer}>
            <CardTitle cardTitle="Done/Todo/Favourites" />
            <CardDescription cardDescription="Here will be displayed the task" />
        </div>
    );
}