import Title from "../components/Header/Title";
import styles from "./Ideas.module.css";
import AddTask from "../components/AddTask/AddTask";
import { TodoContext } from "../contexts/todo-context";
import { useContext } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AddTaskContext } from "../contexts/add-task";

export default function Ideas() {
    const { tasks } = useContext(TodoContext);
    const { addTaskHandler } = useContext(AddTaskContext);

    const submitIdeaHandler = (idea) => {
        addTaskHandler({
            todo: idea.todo,
            completed: idea.completed,
            favorite: idea.favorite,
            todos: true,
            id: idea.id,
        });
    };

    const handleAddTaskClick = (idea) => {
        submitIdeaHandler(idea); 
    };

    return (
        <>
            <Title title="Inspiration Depot" />
            <AddTask />
            <div className={styles.ideasList}>
                {tasks.map((task, index) => (
                    <div className={styles.ideasCard} key={index}>
                        <li className={styles.listItem}>{task.todo}</li>
                        <div
                            onClick={() => handleAddTaskClick(task)}
                            className={styles.addTask}
                        >
                            <IoIosAddCircleOutline />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}


