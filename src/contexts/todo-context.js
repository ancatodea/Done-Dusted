import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext("");

export default function TodoContextProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/todos?limit=30")
            .then((res) => res.json())
            .then((result) => {
                // Modify the API response to include 'favorite' property set to false
                const modifiedTasks = result.todos.map((task) => ({
                    ...task,
                    completed: false,
                    favorite: false,
                    todos: true
                }));
                setTasks(modifiedTasks)
            });
    }, []);

    const taskList = tasks.map((task, index) => (
        <li key={index}>{task.todo}</li>
    ));

    return (
        <TodoContext.Provider value={{ tasks, setTasks, taskList }}>
            {children}
        </TodoContext.Provider>
    );
}
