import { useContext } from "react";
import AddFavourite from "../components/AddTask/AddFavourite";
import AddTask from "../components/AddTask/AddTask";
import DeleteButton from "../components/AddTask/DeleteButton";
import DoneButton from "../components/AddTask/DoneButton";
import Title from "../components/Header/Title";
import { AddTaskContext } from "../contexts/add-task";
import styles from "./Todo.module.css"

export default function Todo() {
    const {task} = useContext(AddTaskContext)
    console.log(task)

    const todosTasks = task.filter((task) => task.todos)
    return (
        <>
            <Title title="Get things done, now!" />
            <AddTask />
            <div className={styles.todosListContainer}>
                {todosTasks.map((task) => (
                    <div key={task.id} className={styles.todosList}>
                        <li className={styles.listItem} key={task.id}>
                            {task.title}
                        </li>
                        <div className={styles.addItems}>
                            <DoneButton id={task.id} completed={task.completed} />
                            <AddFavourite
                                id={task.id}
                                favourite={task.favourite}
                            />
                            <DeleteButton id={task.id} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}