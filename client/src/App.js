import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Todos from "./Components/Todos";
import Preloader from "./Components/preloader";
import Header from "./Components/Header";
import Todo_input from "./Components/Todo_input";
function App() {
  const [todos, setTodo] = useState(null);

  useEffect(() => {
    const getTodo = async () => {
      try {
        const res = await axios.get("http://localhost:5001");
        setTodo(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getTodo();
  }, []);

  const create_todos = async (text) => {
    const res = await axios.post("http://localhost:5001", { message: text });
    setTodo(res.data);
  };
//delete
  const onDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/${id}`);
      setTodo((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
    console.log(`Deleting todo with ID: ${id}`);
  };
  //edit
  const saveTodo = async (id, message) => {
    try {
      await axios.put(`http://localhost:5001/${id}`, { message });
      setTodo((prevTodos) =>
        prevTodos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, message };
          }
          return todo;
        })
      );
    } catch (error) {
      console.error(error);
    }
    console.log(`Updating todo with ID: ${id}`);
  };
  console.log("the todos", todos);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Todo_input createTodo={create_todos} />
        <div>
        {todos ? <Todos todos={todos} onDelete={onDelete} onsave={saveTodo} /> : <Preloader />}
        </div>
      </div>
    </div>
  );
}

export default App;
