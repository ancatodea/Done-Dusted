import { useEffect, useState } from "react";
import AddFavourite from "../AddTask/AddFavourite";
import AddTaskButton from "../AddTask/AddTaskButton";
import styles from "./Task.module.css";

export default function Task() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/todos?limit=30")
            .then((res) => res.json())
            .then((result) => {
                setTasks(result.todos);
            });
    }, []);

    // Mapping tasks to create a list of JSX elements
    const taskList = tasks.map((task, index) => (
        <li className={styles.listItem} key={index}>
            {task.todo}
            <AddTaskButton />
            <AddFavourite />
        </li>
    ));

    return (
        <>
            <ul>{taskList}</ul>
        </>
    );
}
