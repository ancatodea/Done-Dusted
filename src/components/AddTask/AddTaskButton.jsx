import { useContext, useEffect, useState } from "react";
import { AddTaskContext } from "../../contexts/add-task";
import styles from "./AddTaskButton.module.css";

export default function AddTaskButton() {
    const { submitTaskHandler } = useContext(AddTaskContext);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <button
                onClick={submitTaskHandler}
                type="submit"
                className={styles.addButton}
            >
                {isSmallScreen ? "Add" : "Add Task"}
            </button>
        </>
    );
}
