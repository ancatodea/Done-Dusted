import { createContext, useEffect, useReducer, useState } from "react";

export const AddTaskContext = createContext("");

const tasksReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            if (!action.title.trim()) {
                return state;
            }
            const newTask = {
                title: action.title,
                completed: false,
                favourite: false,
                todos: true,
                id: Math.floor(Math.random() * 1000),
            };
            console.log(state);
            return [...state, newTask];

        case "COMPLETE":
            return state.map((task) => {
                if (task.id === action.id) {
                    return { ...task, completed: !task.completed };
                }
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

// export default function AddTaskContextProvider({ children }) {
//     const [inputText, setInputText] = useState("");
//     const [task, setTask] = useState([])

//     useEffect(() => {
//         if (task.length > 0) {
//             localStorage.setItem("task", JSON.stringify(task));
//         }
//     }, [task]);

//     useEffect(() =>{
//         const storedTasks = JSON.parse(localStorage.getItem("task"));
//         if (storedTasks && Array.isArray(storedTasks)) {
//             // setTask(storedTasks);
//             dispatch({ type: "INITIALIZE_TASKS", tasks: storedTasks });
//         }
//     }, [])

//     const addTaskHandler = () => {
//         dispatch({
//             type:"ADD",
//             title: inputText,
//         })
//         setInputText("");
//     }

//     const submitTaskHandler = (e) => {
//         // e.preventDefault();
//         // [
//         //     ...task,
//         //     {
//         //         title: inputText,
//         //         completed: false,
//         //         favourite: false,
//         //         todos: true,
//         //         id: Math.floor(Math.random() * 1000),
//         //     },
//         // ];
//         addTaskHandler();
//         setInputText("");
//     };

//     const inputTextHandler = (e) => {
//         setInputText(e.target.value);
//     };

//     return (
//         <AddTaskContext.Provider
//             value={{
//                 // setTask,
//                 addTaskHandler,
//                 inputTextHandler,
//                 inputText,
//                 submitTaskHandler,
//                 setInputText,
//                 task
//             }}
//         >
//             {children }
//         </AddTaskContext.Provider>
//     );
// }

export default function AddTaskContextProvider({ children }) {
    const [inputText, setInputText] = useState("");
    const [task, setTask] = useState([]);
    const [tasks, dispatch] = useReducer(tasksReducer, task);

    useEffect(() => {
        if (task.length > 0) {
            localStorage.setItem("task", JSON.stringify(task));
        }
    }, [task]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("task"));
        if (storedTasks && Array.isArray(storedTasks)) {
            setTask(storedTasks);
            // dispatch({ type: "INITIALIZE_TASKS", tasks: storedTasks });
        }
    }, []);

    const addTaskHandler = () => {
        dispatch({
            type: "ADD",
            title: inputText,
        });
        setInputText("");
    };

    const submitTaskHandler = (e) => {
        // e.preventDefault();
        setTask([
            ...task,
            {
                title: inputText,
                completed: false,
                favourite: false,
                todos: true,
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
                setTask,
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
