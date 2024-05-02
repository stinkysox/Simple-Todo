import {useState} from 'react'
import './index.css'
import {v4 as uuid4} from 'uuid'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

const SimpleTodos = () => {
  const [todoList, setTodoList] = useState(initialTodosList)
  const [newTodo, setNewTodo] = useState('')

  const onDeleteTodo = id => {
    console.log(id)

    const filteredList = todoList.filter(eachItem => eachItem.id !== id)
    setTodoList(filteredList)
  }
  const onInputChange = event => {
    setNewTodo(event.target.value)
  }

  const onAddTodo = () => {
    if (newTodo !== '') {
      const id = uuid4()

      const newTodoObject = {
        id,
        title: newTodo,
      }

      setTodoList([...todoList, newTodoObject])

      setNewTodo('')
    }
  }

  return (
    <div className="app">
      <div className="main-container">
        <p className="main-heading">Simple Todos</p>
        <div className="input-container">
          <input
            type="text"
            className="input-el"
            onChange={onInputChange}
            value={newTodo}
          />
          <button className="save-btn" onClick={onAddTodo} type="button">
            Add
          </button>
        </div>
        <ul className="todos-container">
          {todoList.map(eachItem => (
            <TodoItem details={eachItem} onDeleteTodo={onDeleteTodo} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SimpleTodos
