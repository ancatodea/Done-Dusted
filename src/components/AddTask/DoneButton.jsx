import styles from "./DoneButton.module.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { useContext } from "react";
import { AddTaskContext } from "../../contexts/add-task";

export default function DoneButton({id, completed}) {
    const { completedHandler } = useContext(AddTaskContext);

    const handleCompletedClick = () => {
        completedHandler(id); 
    };
    return (
        <span onClick={handleCompletedClick} className={styles.doneButtonContainer }>
            <FaRegCheckCircle />
        </span>
    );
}
