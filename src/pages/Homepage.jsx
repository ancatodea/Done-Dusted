import { useContext } from "react";
import Title from "../components/Header/Title";
import Todos from "../components/Todos/Todos";
import AddTask from "../components/AddTask/AddTask";
import Card from "../components/Card/Card";
import { AddTaskContext } from "../contexts/add-task";
import styles from "./Homepage.module.css";

export default function Homepage() {
    const { task } = useContext(AddTaskContext);

    if (!Array.isArray(task) || task.length === 0) {
        return (
            <>
                <Title title="Manage your time, plan every task!" />
                <AddTask />
                <h2> You need to add a new task </h2>
                <p>Check out our suggestions</p>
                <Todos />
            </>
        );
    }

    return (
        <>
            <Title title="Manage your time, plan every task!" />
            <AddTask />
            <div className={styles.taskContainer}>
                {task.map((taskItem) => (
                    <Card
                        key={taskItem.id}
                        todo={taskItem.todo}
                        completed={taskItem.completed}
                        favorite={taskItem.favorite}
                        todos={taskItem.todos}
                        id={taskItem.id}
                    />
                ))}
            </div>
        </>
    );
}


