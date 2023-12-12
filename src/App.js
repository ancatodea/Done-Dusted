import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Header/NavBar';
import AddTaskContextProvider from './contexts/add-task';
import TodoContextProvider from './contexts/todo-context';
import Done from './pages/Done';
import Favourites from './pages/Favourites';
import Homepage from "./pages/Homepage";
import Ideas from './pages/Ideas';
import Todo from './pages/Todo';

function App() {
  return (
      <div className="App">
          <TodoContextProvider>
              <AddTaskContextProvider>
                  <NavBar />
                  <Routes>
                      <Route path="/" element={<Homepage />} />
                      <Route path="/todo" element={<Todo />} />
                      <Route path="/ideas" element={<Ideas />} />
                      <Route path="/done" element={<Done />} />
                      <Route path="/favourites" element={<Favourites />} />
                  </Routes>
              </AddTaskContextProvider>
          </TodoContextProvider>
      </div>
  );
}

export default App;
