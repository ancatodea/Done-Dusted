import styles from "./TaskIdeas.module.css"
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState, useContext } from "react";
import { AddTaskContext } from "../../contexts/add-task";

const initialIdeas = [
        {
            id: 1000,
            title: "Do laundry",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 2000,
            title: "Go shopping",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 3000,
            title: "Bake your favourite cake",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 4000,
            title: "Create a plan for your app",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 5000,
            title: "Clean the house",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 6000,
            title: "Get done the Todo list app",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 7000,
            title: "Create an app logo",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 8000,
            title: "Implement add task function",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 9000,
            title: "Create a new component for the list",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 10000,
            title: "Do something that makes you laugh",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 11000,
            title: "Get your workout done",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 12000,
            title: "Enjoy an evening walk",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 13000,
            title: "Plan your meals for the week",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 14000,
            title: "Buy Christmas gifts",
            completed: false,
            favourite: false,
            todo: false,
        },
        {
            id: 15000,
            title: "Plan your next trip",
            completed: false,
            favourite: false,
            todo: false,
        },
    ];

export default function Ideas() {
    const [ideas, setIdeas] = useState(initialIdeas);
    const { addTaskHandler } = useContext(AddTaskContext);

    // const submitIdeaHandler = (idea) => {
    //     addTaskHandler((prevTasks) => [
    //         ...prevTasks,
    //         {
    //             title: idea.title,
    //             completed: idea.completed,
    //             favourite: idea.favourite,
    //             todos: true,
    //             id: idea.id,
    //         },
    //     ]);
    // };
    const submitIdeaHandler = (idea) => {
        // Assuming idea is an object with properties like title, completed, favourite, and id
        addTaskHandler({
            title: idea.title,
            completed: idea.completed,
            favourite: idea.favourite,
            todos: true,
            id: idea.id,
        });
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

