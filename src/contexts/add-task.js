import { createContext, useEffect, useState } from "react";

export const AddTaskContext = createContext("");

export default function AddTaskContextProvider({ children }) {
    const [inputText, setInputText] = useState("");
    const [task, setTask] = useState([]);

    useEffect(() => {
        if (task.length > 0) {
            localStorage.setItem("task", JSON.stringify(task));
        }
    }, [task]);


    useEffect(() =>{
        const storedTasks = JSON.parse(localStorage.getItem("task"));
        if (storedTasks && Array.isArray(storedTasks)) {
            setTask(storedTasks);
        }
    }, [])

    const submitTaskHandler = (e) => {
        // e.preventDefault();
        setTask([
            ...task,
            {
                title: inputText,
                completed: false,
                favourite: false,
                todo: true,
                id: Math.floor(Math.random() * 1000),
            },
        ]);
        setInputText("");
    };


    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    return (
        <AddTaskContext.Provider
            value={{
                // submitIdeasHandler,
                setTask,
                inputTextHandler,
                inputText,
                submitTaskHandler,
                setInputText,
                task
            }}
        >
            {children }
        </AddTaskContext.Provider>
    );
}
