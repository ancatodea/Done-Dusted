import AddTaskBar from "./AddTaskBar";
import styles from "./AddTask.module.css"

export default function AddTask() {
    return(
        <div className={styles.addTaskContainer}>
        <AddTaskBar />
        </div>
    )
}