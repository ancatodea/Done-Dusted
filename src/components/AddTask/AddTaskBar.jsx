import {  useContext } from "react";
import { AddTaskContext } from "../../contexts/add-task";
import styles from "./AddTaskBar.module.css";
import AddTaskButton from "./AddTaskButton";

export default function AddTaskBar() {

    const { inputText, inputTextHandler } = useContext(AddTaskContext);

    return (
        <>
            <input
                value={inputText}
                onChange={inputTextHandler}
                className={styles.addTaskBar}
                type="text"
                placeholder="Add a new task"
            />
            <AddTaskButton />
        </>
    );
}
