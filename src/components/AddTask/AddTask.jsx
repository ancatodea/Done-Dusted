import AddTaskBar from "./AddTaskBar";
import AddTaskButton from "./AddTaskButton";
import styles from "./AddTask.module.css"

export default function AddTask() {
    return(
        <div className={styles.addTaskContainer}>
        <AddTaskBar />
        <AddTaskButton />
        </div>
    )
}