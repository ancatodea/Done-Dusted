import styles from "./AddTaskButton.module.css"
export default function AddTaskButton() {
    return (
        <>
            <button type="button" className={styles.addButton}>
                Add task
            </button>
        </>
    );
}