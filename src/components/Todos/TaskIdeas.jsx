import styles from "./TaskIdeas.module.css"
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState, useContext } from "react";
import { AddTaskContext } from "../../contexts/add-task";

const initialIdeas = [
        {
            id: 1,
            title: "Do laundry",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 2,
            title: "Go shopping",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 3,
            title: "Bake your favourite cake",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 4,
            title: "Create a plan for your app",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 5,
            title: "Clean the house",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 6,
            title: "Get done the Todo list app",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 7,
            title: "Create an app logo",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 8,
            title: "Implement add task function",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 9,
            title: "Create a new component for the list",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 10,
            title: "Do something that makes you laugh",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 11,
            title: "Get your workout done",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 12,
            title: "Enjoy an evening walk",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 13,
            title: "Plan your meals for the week",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 14,
            title: "Buy Christmas gifts",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 15,
            title: "Plan your next trip",
            completed: false,
            favourite: false,
            todo: false,
        },
    ];

export default function Ideas() {
    const [ideas, setIdeas] = useState(initialIdeas);
    const { setTask } = useContext(AddTaskContext);

    const submitIdeaHandler = (idea) => {
        setTask((prevTasks) => [
            ...prevTasks,
            {
                title: idea.title,
                completed: idea.completed,
                favourite: idea.favourite,
                todo: true,
                id: idea.id,
            },
        ]);
    };

    return (
        <>
            {ideas.map((idea) => (
                <ul className={styles.ideasList} key={idea.id}>
                    <li className={styles.listItem}>
                        {idea.title}
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

