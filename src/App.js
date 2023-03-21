import './App.css';
import { useState } from 'react';
import { FormCreator } from './components/todo-creator';
import { TodoItem } from './components/todo-item/todo-item';
import json from './todos.json';

function App() {
let [todos, setTodos] = useState(json);

const addTodo = (title) => {
setTodos([...todos, { title, isDone: false }])
}

const removeTodo = (index) => {
const filteredTodos = todos.filter((todo, idx) => index !== idx);
setTodos(filteredTodos);
};

const checkTodo = (index) => {
const newTodos = [...todos];
newTodos[index].isDone = !newTodos[index].isDone;
setTodos(newTodos);
}

const editTodo = (index, newTitle) => {
const newTodos = [...todos];
newTodos[index].title = newTitle;
setTodos(newTodos);
}


return (
<div className="App">
<h1>Todo app</h1>
<hr />

<FormCreator createTodo={addTodo} />

  <body>
    {todos.map((todo, index) => (
      <TodoItem
        key={index}
        itemIndex={index}
        title={todo.title}
        isDone={todo.isDone}
        checkItem={() => checkTodo(index)}
        removeItem={() => removeTodo(index)}
        editItem={(newTitle) => editTodo(index, newTitle)}
      />
    ))}
  </body>

</div>

  );
}

export default App;
