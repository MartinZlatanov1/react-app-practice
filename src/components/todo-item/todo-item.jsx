import './todo-item.css'

export function TodoItem({ title, checkTodo, removeItem, editTodo }) {


  return (
    <div className="todo__item">
      <input type="checkbox" checked={checkTodo} onChange={checkTodo} />
      <a className="todo__item__title" contentEditable onBlur={({ target }) => editTodo(target.textContent)}>{title}</a>
      <button onClick={removeItem}>X</button>
    </div>
  )
}