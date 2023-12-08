import styles from "./TaskIdeas.module.css"
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";

const initialIdeas = [
        {
            id: 1,
            title: "Do laundry",
            complete: false,
            favourite: false,
            todo: false,
        },
        {
            id: 2,
            title: "Go shopping",
            complete: false,
            favourite: false,
            todo: false,
        },
        {
            id: 3,
            title: "Bake your favourite cake",
            complete: false,
            favourite: false,
            todo: false,
        },
        {
            id: 4,
            title: "Create a plan for your app",
            complete: false,
            favourite: false,
            todo: false,
        },
        {
            id: 5,
            title: "Clean the house",
            complete: false,
            favourite: false,
            todo: false,
        },
        {
            id: 6,
            title: "Get done the Todo list app",
            complete: false,
            favourite: false,
            todo: false,
        },
        {
            id: 7,
            title: "Create an app logo",
            complete: false,
            favourite: false,
            todo: false,
        },
        {
            id: 8,
            title: "Implement add task function",
            complete: false,
            favourite: false,
            todo: false,
        },
        {
            id: 9,
            title: "Create a new component for the list",
            complete: false,
            favourite: false,
            todo: false,
        },
        {
            id: 10,
            title: "Do something that makes you laugh",
            complete: false,
            favourite: false,
            todo: false,
        },
        {
            id: 11,
            title: "Get your workout done",
            complete: false,
            favourite: false,
            todo: false,
        },
        {
            id: 12,
            title: "Enjoy an evening walk",
            complete: false,
            favourite: false,
            todo: false,
        },
        {
            id: 13,
            title: "Plan your meals for the week",
            complete: false,
            favourite: false,
            todo: false,
        },
        {
            id: 14,
            title: "Buy Christmas gifts",
            complete: false,
            favourite: false,
            todo: false,
        },
        {
            id: 15,
            title: "Plan your next trip",
            complete: false,
            favourite: false,
            todo: false,
        },
    ];

export default function Ideas() {
    const[ideas, setIdeas]= useState(initialIdeas)
    
    return (
        <>
            {ideas.map((idea) => (
                <ul className={styles.ideasList} key={idea.id}>
                    <li className={styles.listItem}>
                        {idea.title}
                        <span className={styles.addButton}>
                            <IoIosAddCircleOutline />
                        </span>
                    </li>
                </ul>
            ))}
        </>
    );
}