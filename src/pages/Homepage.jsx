import styles from "./Homepage.module.css"
import Title from "../components/Header/Title";
import Todos from "../components/Todos/Todos";
import AddTask from "../components/AddTask/AddTask";
import Card from "../components/Card/Card";

export default function Homepage() {
    return (
        <>
            <Title title="Manage your time, plan every task!" />
            <Todos />
            <AddTask />
            <p>If there are none = You need to add new task here</p>
            <div className={styles.taskContainer}>
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}