import CardTitle from "./CardTitle";
import styles from "./Card.module.css"
import CardDescription from "./CardDescription";

export default function Card({task}) {
    return (
        <div className={styles.cardContainer}>
            <CardTitle cardTitle={task.title} />
            <CardDescription cardDescription="Here will be displayed the task" />
        </div>
    );
}