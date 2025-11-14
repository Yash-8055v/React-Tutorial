import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos(prev => [...prev, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== id)
    );
  };

  let upperCaseAll = () => {
    setTodos(prevTodos =>
      prevTodos.map(todo => ({
        ...todo,
        task: todo.task.toUpperCase()
      }))
    );
  };

  let upperCaseOne = (id) => {
    setTodos(prevTodos =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder='add a task'
        value={newTodo}
        onChange={updateTodoValue}
      />

      <br /><br />
      <button onClick={addNewTask}>Add Task</button>

      <hr />
      <h4>Tasks Todo</h4>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            &nbsp;&nbsp;
            <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button>
          </li>
        ))}
      </ul>

      <br /><br />
      <button onClick={upperCaseAll}>Upper Case All</button>
    </div>
  );
}
