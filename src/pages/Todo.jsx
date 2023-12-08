import AddTask from "../components/AddTask/AddTask";
import Title from "../components/Header/Title";
import styles from "./Todo.module.css"

export default function Todo() {
    return (
        <>
            <Title title="Get things done, now!" />
            <AddTask />
            <p>If no todos display a big p to say "There are no tasks to do right now, add some"</p>
        </>
    );
}