import styles from "./TaskIdeas.module.css"
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState, useContext } from "react";
import { AddTaskContext } from "../../contexts/add-task";

const initialIdeas = [
        {
            id: 1000,
            todo: "Do laundry",
            completed: false,
            favorite: false,
            todos: false,
        },
        {
            id: 2000,
            todo: "Go shopping",
            completed: false,
            favorite: false,
            todos: false,
        },
        {
            id: 3000,
            todo: "Bake your favorite cake",
            completed: false,
            favorite: false,
            todos: false,
        },
        {
            id: 4000,
            todo: "Create a plan for your app",
            completed: false,
            favorite: false,
            todos: false,
        },
        {
            id: 5000,
            todo: "Clean the house",
            completed: false,
            favorite: false,
            todos: false,
        },
        {
            id: 6000,
            todo: "Get done the Todo list app",
            completed: false,
            favorite: false,
            todos: false,
        },
        {
            id: 7000,
            todo: "Create an app logo",
            completed: false,
            favorite: false,
            todos: false,
        },
        {
            id: 8000,
            todo: "Implement add task function",
            completed: false,
            favorite: false,
            todos: false,
        },
        {
            id: 9000,
            todo: "Create a new component for the list",
            completed: false,
            favorite: false,
            todos: false,
        },
        {
            id: 10000,
            todo: "Do something that makes you laugh",
            completed: false,
            favorite: false,
            todos: false,
        },
        {
            id: 11000,
            todo: "Get your workout done",
            completed: false,
            favorite: false,
            todos: false,
        },
        {
            id: 12000,
            todo: "Enjoy an evening walk",
            completed: false,
            favorite: false,
            todos: false,
        },
        {
            id: 13000,
            todo: "Plan your meals for the week",
            completed: false,
            favorite: false,
            todos: false,
        },
        {
            id: 14000,
            todo: "Buy Christmas gifts",
            completed: false,
            favorite: false,
            todos: false,
        },
        {
            id: 15000,
            todo: "Plan your next trip",
            completed: false,
            favorite: false,
            todos: false,
        },
    ];

export default function Ideas() {
    const [ideas, setIdeas] = useState(initialIdeas);
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

    return (
        <>
            {ideas.map((idea) => (
                <ul className={styles.ideasList} key={idea.id}>
                    <li className={styles.listItem}>
                        {idea.todo}
                        <span
                            onClick={() => submitIdeaHandler(idea)}
                            className={styles.addButton}
                        >
                            <IoIosAddCircleOutline />
                        </span>
                    </li>
                </ul>
            ))}
        </>
    );
}

