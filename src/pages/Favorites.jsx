import { useContext } from "react";
import AddFavorite from "../components/AddTask/AddFavorite";
import AddTask from "../components/AddTask/AddTask";
import DeleteButton from "../components/AddTask/DeleteButton";
import DoneButton from "../components/AddTask/DoneButton";
import Title from "../components/Header/Title";
import { AddTaskContext } from "../contexts/add-task";
import styles from "./Favorites.module.css"

export default function Favorites() {
    const {task} = useContext(AddTaskContext)

    const todosTasks = task.filter((task) => task.favorite);
    return (
        <>
            <Title title="Prime Task Collection" />
            <AddTask />
            <div className={styles.todosListContainer}>
                {todosTasks.map((task) => (
                    <div key={task.id} className={styles.todosList}>
                        <div className={styles.favoriteTitle}>
                            <AddFavorite
                                id={task.id}
                                favorite={task.favorite}
                            />
                            <li className={styles.listItem} key={task.id}>
                                {task.todo}
                            </li>
                        </div>
                        <div className={styles.addItems}>
                            <DoneButton
                                id={task.id}
                                completed={task.completed}
                            />
                            <DeleteButton id={task.id} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}