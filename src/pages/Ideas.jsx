import Title from "../components/Header/Title";
import styles from "./Ideas.module.css";
import AddTask from "../components/AddTask/AddTask";
import { TodoContext } from "../contexts/todo-context";
import { useContext } from "react";
import AddTaskButton from "../components/AddTask/AddTaskButton";
import AddFavourite from "../components/AddTask/AddFavourite";
import { AddTaskContext } from "../contexts/add-task";

export default function Ideas() {
    const { tasks } = useContext(TodoContext);
    const { addTaskHandler } = useContext(AddTaskContext);

    const submitIdeaHandler = (idea) => {
        addTaskHandler({
            title: idea.todo,
            completed: idea.completed,
            favourite: idea.favourite,
            todos: true,
            id: idea.id,
        });
    };

    const handleAddTaskClick = (idea) => {
        submitIdeaHandler(idea); 
    };

    return (
        <>
            <Title title="In case you need some ideas for your daily plan" />
            <AddTask />
            <div className={styles.ideasList}>
                {tasks.map((task, index) => (
                    <div className={styles.ideasCard} key={index}>
                        <li className={styles.listItem}>{task.todo}</li>
                        <div className={styles.addItems}>
                            <div
                                onClick={() => handleAddTaskClick(task)}
                                className="addTask"
                            >
                                <AddTaskButton />
                            </div>
                            <AddFavourite />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}


