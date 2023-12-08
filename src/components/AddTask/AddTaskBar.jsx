import styles from "./AddTaskBar.module.css"

export default function AddTaskBar() {

    const handleChange = (todo) => {
        
    }

    return(
        <>
        <input onChange={handleChange()} className={styles.addTaskBar} type="text" placeholder="Add a new task" />
        </>
    )
}