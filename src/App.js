import './App.css';
import { useState } from 'react';
import { FormCreator } from './components/todo-creator';
import { TodoItem } from './components/todo-item/todo-item';
import json from './todos.json';

function App() {
  let [todos, addTodos] = useState(json);


  const addTodo = (title) => {
    addTodos([...todos, { title, isDone: false }])

    console.log(todos);
  }

  const removeTodo = (index) => {
    return () => {
      const tds = todos.filter((todo, idx) => index !== idx);
      addTodos(tds);
    }
  };

  return (
    <div className="App">
      <h1>Todo app</h1>
      <hr />

      <FormCreator createTodo={addTodo} />

      {
        todos.map((todo, index) => {
          return (
            <TodoItem key={index} itemIndex={index} removeItem={removeTodo(index)} title={todo.title} checkItem={() => { }} />
          );
        })
      }

    </div>
  );
}

export default App;
