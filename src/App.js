import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const initialTodo = { id: uuidv4(), title: "", description: "", finished: false };

function App() {
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState(initialTodo);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const addTodo = () => {
    setTodos((prev) => [...prev, state]);
    setState(initialTodo);
  };

  const deleteTodo = ({ id }) => {
    setTodos((prev) => prev.filter((todo) => todo.id === id));
  };

  const { title, description } = state;

  return (
    <>
      <input type="text" name="title" value={title} onChange={handleChange} placeholder="title" />
      <input type="text" name="description" value={description} onChange={handleChange} placeholder="description" />

      <button onClick={addTodo}>add todo</button>

      <ul style={{ listStyleType: "none" }}>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
            <div>
              <span>Title: </span>
              {todo.title}
            </div>

            <div>
              <span>Beskrivelse:</span>
              {todo.description}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
