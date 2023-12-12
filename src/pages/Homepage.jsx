import styles from "./Homepage.module.css"
import { useContext } from "react";
import Title from "../components/Header/Title";
import Todos from "../components/Todos/Todos";
import AddTask from "../components/AddTask/AddTask";
import Card from "../components/Card/Card";
import { AddTaskContext } from "../contexts/add-task";

export default function Homepage() {
    const {task} = useContext(AddTaskContext);

    if (task.length === 0) {
        
        return (
            <>
                <Title title="Manage your time, plan every task!" />
                <Todos />
                <AddTask />
                <h2> You need to add new task </h2>
                <p>Check our suggestions in the ideas section</p>
            </>
        );
    } 
    return (
        <>
            <Title title="Manage your time, plan every task!" />
            <Todos />
            <AddTask />
            <div className={styles.taskContainer}>
                {task.map(task => (
                    <Card task={task}/>
                )) }
            </div>
        </>
    ); 
}