import TaskIdeas from "./TaskIdeas";
import Task from "./Task";
import styles from "./Todos.module.css";

export default function Todos() {
    return (
        <div className={styles.todosContainer}>
            <h5 className={styles.taskContainerHeading}>Ideas</h5>
            {/* <Task /> */}
            <TaskIdeas />
        </div>
    );
}