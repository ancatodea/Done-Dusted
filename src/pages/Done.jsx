import AddTask from "../components/AddTask/AddTask";
import Title from "../components/Header/Title";
import styles from "./Done.module.css"

export default function Done() {
    return (
        <>
            <Title title="Done" />
            <AddTask />
            <p>You need to complete tasks in order to get them displayed here</p>
        </>
    );
}