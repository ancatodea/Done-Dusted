import styles from "./DeleteButton.module.css";
import { FaRegTrashCan } from "react-icons/fa6";
import { useContext } from "react";
import { AddTaskContext } from "../../contexts/add-task";

export default function DeleteButton({id}) {
    const {deleteTaskHandler} = useContext(AddTaskContext);

    const handleDelete = () => {
        deleteTaskHandler(id) 
    }
    return (
        <span onClick={handleDelete} className={styles.deleteButtonContainer}>
            <FaRegTrashCan />
        </span>
    );
}
