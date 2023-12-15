import { createContext, useEffect, useReducer, useState } from "react";

export const AddTaskContext = createContext("");

const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD":
            const newTask = {
                title: action.title,
                completed: false,
                favourite: false,
                todos: true,
                id: Math.floor(Math.random() * 1000),
            };
            return [...state, newTask];

        case "COMPLETE":
            return state.map((task) => {
                if (task.id === action.id) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
        case "TODOS":
            return state.map((task) => {
                if (task.id === action.id) {
                    return { ...task, todos: !task.todos };
                }
            });
        case "FAVOURITE":
            return state.map((task) => {
                if (task.id === action.id) {
                    return { ...task, favourite: !task.favourite };
                }
            });
            
        case "DELETE":
            return state.filter((task) => task.id !== action.id);

        case "INITIALIZE_TASKS":
            return action.tasks;
        default:
            return state;
    }
};

export default function AddTaskContextProvider({ children }) {
    const [inputText, setInputText] = useState("");
    const [task, dispatch] = useReducer(tasksReducer, [])

    useEffect(() => {
        if (task.length > 0) {
            localStorage.setItem("task", JSON.stringify(task));
        }
    }, [task]);

    useEffect(() => {
        const savedTasks = localStorage.getItem("task");
        if (savedTasks) {
            dispatch({
                type: "INITIALIZE_TASKS",
                tasks: JSON.parse(savedTasks),
            });
        }
    }, []);

    const addTaskHandler = (task) => {
        dispatch({
            type:"ADD",
            title: task.title,
        })
        setInputText("");
    }

    const completedHandler = (id) => {
        dispatch({
            type: "COMPLETE",
            id: id,
        });
    };

    const favouriteHandler = (id) => {
        dispatch({
            type: "FAVOURITE",
            id: id,
        });
    };

    const deleteTaskHandler = (id) => {
        dispatch({
            type: "DELETE",
            id: id
        })
    }

    const todosHandler = (task) => {
        dispatch({
            type: "TODOS",
            id: task.id,
        });
    };

    const submitTaskHandler = () => {
        if (inputText.trim() !== "") {
            dispatch({
                type: "ADD",
                title: inputText,
            });
            setInputText("");
        } else {
            console.log("Input text is empty. Please enter a task.");
        }
    };


    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    return (
        <AddTaskContext.Provider
            value={{
                favouriteHandler,
                todosHandler,
                deleteTaskHandler,
                addTaskHandler,
                completedHandler,
                inputTextHandler,
                inputText,
                submitTaskHandler,
                setInputText,
                task,
            }}
        >
            {children}
        </AddTaskContext.Provider>
    );
}
