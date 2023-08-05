// Write your code here

import './index.css'

const TodoItem = props => {
  const {TodosList, deleteTodo} = props
  const {title, id} = TodosList

  const DeleteBtn = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <div className="list-items">
        <p>{title}</p>
        <div>
          <button type="button" onClick={DeleteBtn}>
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}
export default TodoItem
