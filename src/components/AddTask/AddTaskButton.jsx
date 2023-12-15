import { useContext } from "react";
import { AddTaskContext } from "../../contexts/add-task";
import styles from "./AddTaskButton.module.css"
export default function AddTaskButton() {
    const {submitTaskHandler} = useContext(AddTaskContext)

    return (
        <>
            <a onClick={submitTaskHandler} type="submit" className={styles.addButton}>
                Add task
            </a>
        </>
    );
}