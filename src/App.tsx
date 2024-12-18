import { useState } from 'react'
import clsx from 'clsx'

export const App = () => {
  // return <h1 className='flex justify-center'>Todo List</h1>
  const [todos, setTodos] = useState([
    { id: 1, text: 'Milk', completed: false },
    { id: 2, text: 'Eggs', completed: false },
    { id: 3, text: 'Cheese', completed: true }
  ])
  const [newTodo, setNewTodo] = useState('')

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo, completed: false }
      ])
      setNewTodo('')
    }
  }

  const toggleCompletion = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div className='w-full min-h-screen min-w-[310px] bg-white p-4 md:p-8 font-mono'>
      <div className='max-w-4xl mx-auto'>
        {/* Title */}
        <h1 className='text-3xl font-bold mb-6 text-black'>Todo List</h1>

        {/* Todo Items */}
        <ul>
          {todos.map(todo => (
            <li
              key={todo.id}
              className='flex items-center py-4 border-b border-gray-200 gap-4'
            >
              {/* Checkbox */}
              <span
                className={clsx(
                  'w-6 h-6 flex items-center justify-center rounded-full border-2 border-purple-500 text-purple-500',
                  {
                    'bg-purple-500': todo.completed
                  }
                )}
              >
                <input
                  type='checkbox'
                  className='appearance-none w-5 h-5'
                  checked={todo.completed}
                  onChange={() => toggleCompletion(todo.id)}
                />
              </span>

              {/* Todo Text */}
              <span
                className={clsx('text-lg text-gray-800', {
                  'line-through': todo.completed
                })}
              >
                {todo.text}
              </span>
            </li>
          ))}

          {/* Add New Todo */}
          <div className='flex items-center flex-wrap py-4 gap-4'>
            <div className='w-6 h-6 min-h-6 min-w-6 flex items-center justify-center rounded-full bg-purple-500'>
              <p className='text-white text-3xl font-bold -mt-1'>+</p>
            </div>

            <input
              type='text'
              placeholder='Memorize the dictionary'
              value={newTodo}
              onChange={e => setNewTodo(e.target.value)}
              className='flex-1 px-4 py-2 border-none  text-gray-400 outline-none ring-0 focus:ring-0'
            />

            <button
              onClick={handleAddTodo}
              className='px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition duration-300 sm:w-auto w-full'
            >
              Add Item
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}
