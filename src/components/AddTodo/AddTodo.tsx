import type { ChangeEvent } from 'react'

type Props = {
  newTodo: string
  onTodoChange: (e: ChangeEvent<HTMLInputElement>) => void
  onAddTodo: (newTodo: string) => void
}

export const AddTodo = ({ newTodo, onTodoChange, onAddTodo }: Props) => (
  <div className='flex items-center flex-wrap py-3 gap-4 border-b border-gray-200'>
    <div className='w-6 h-6 min-h-6 min-w-6 flex items-center justify-center rounded-full bg-purple-500'>
      <p className='text-white text-3xl font-bold -mt-1'>+</p>
    </div>

    <input
      type='text'
      placeholder='Memorize the dictionary'
      value={newTodo}
      className='flex-1 px-0 py-2 border-none  text-gray-400 outline-none ring-0 focus:ring-0 font-medium'
      onChange={onTodoChange}
      onKeyDown={e => {
        const trimmedValue = (e.target as HTMLInputElement).value.trim()

        if (e.key === 'Enter' && trimmedValue) {
          onAddTodo(trimmedValue)
        }
      }}
    />

    <button
      onClick={() => onAddTodo(newTodo)}
      className='px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition duration-300 sm:w-auto w-full font-medium'
    >
      Add Item
    </button>
  </div>
)
