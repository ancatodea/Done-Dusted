import styles from "./TaskContainer.module.css";

export default function TaskContainer(props) {
    const {taskTitle} = props;
    console.log(props);
    return(
        <div className={styles.taskContainer}>
            <h3>{taskTitle}</h3>
        </div>
    )
}