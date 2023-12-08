import Title from "../components/Header/Title";
import styles from './Ideas.module.css'
import AddTask from "../components/AddTask/AddTask";
import { TodoContext } from "../contexts/todo-context";
import { useContext } from "react";

export default function Ideas() {
    const {tasks} = useContext(TodoContext)
    return (
        <>
            <Title title="In case you need some ideas for your daily plan" />
            <AddTask />
            <div className={styles.ideasList}>
                {tasks.map((task, index) => (
                    <li className={styles.listItem} key={index}>
                        {task.todo}
                    </li>
                ))}
            </div>
        </>
    );
}