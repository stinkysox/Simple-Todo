import './index.css'
import {useState} from 'react'

const TodoItem = props => {
  const {details, onDeleteTodo} = props
  const {id, title} = details
  const [isEditClicked, setEdit] = useState(false)
  const [savedTitle, setTitle] = useState(title)
  const [checkedStatus, setCheckedStatus] = useState(false)

  const onSavedClicked = () => {
    setEdit(false)
    setTitle(savedTitle)
  }

  const onEditClicked = () => {
    setEdit(true)
  }

  const onInputEditChange = event => {
    setTitle(event.target.value)
  }

  const onCheckBoxChange = event => {
    const isChecked = event.target.checked
    setCheckedStatus(isChecked)
  }

  return (
    <li className="task-card">
      <div>
        <input type="checkbox" onChange={onCheckBoxChange} />
      </div>
      <div className="first-container">
        {isEditClicked ? (
          <input
            type="text"
            value={savedTitle}
            onChange={onInputEditChange}
            className="input-edit-el"
          />
        ) : (
          <p
            className="title"
            style={{textDecoration: checkedStatus ? 'line-through' : 'none'}}
          >
            {savedTitle}
          </p>
        )}
      </div>
      <div className="second-container">
        {isEditClicked ? (
          <button
            onClick={onSavedClicked}
            type="button"
            className="edit-btn-two"
          >
            Save
          </button>
        ) : (
          <button onClick={onEditClicked} type="button" className="edit-btn">
            Edit
          </button>
        )}
      </div>
      <div className="third-container">
        <button
          className="delete-btn"
          onClick={() => onDeleteTodo(id)}
          type="button"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
