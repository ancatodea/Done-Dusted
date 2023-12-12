import Title from "../components/Header/Title";
import styles from './Ideas.module.css'
import AddTask from "../components/AddTask/AddTask";
import { TodoContext } from "../contexts/todo-context";
import { useContext } from "react";
import AddTaskButton from "../components/AddTask/AddTaskButton";
import AddFavourite from "../components/AddTask/AddFavourite";

export default function Ideas() {
    const {tasks} = useContext(TodoContext)
    return (
        <>
            <Title title="In case you need some ideas for your daily plan" />
            <AddTask />
            <div className={styles.ideasList}>
                {tasks.map((task, index) => (
                    <div className={styles.ideasCard} key={index}>
                        <li className={styles.listItem}>{task.todo}</li>
                        <div className={styles.addItems}>
                            <AddTaskButton />
                            <AddFavourite />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}