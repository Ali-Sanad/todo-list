import type { ChangeEvent } from 'react'

type Props = {
  newTodo: string
  onTodoChange: (e: ChangeEvent<HTMLInputElement>) => void
  onAddTodo: (newTodo: string) => void
}

export const AddTodo = ({ newTodo, onTodoChange, onAddTodo }: Props) => (
  <div className="flex flex-wrap items-center gap-4 border-b border-gray-200 py-3">
    <div className="flex h-6 min-h-6 w-6 min-w-6 items-center justify-center rounded-full bg-purple-500">
      <p className="-mt-1 text-3xl font-bold text-white">+</p>
    </div>

    <input
      type="text"
      placeholder="Memorize the dictionary"
      value={newTodo}
      className="flex-1 border-none px-0 py-2 font-medium text-gray-400 outline-none ring-0 focus:ring-0"
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
      className="w-full rounded-lg bg-purple-600 px-6 py-2 font-medium text-white transition duration-300 hover:bg-purple-500 sm:w-auto"
    >
      Add Item
    </button>
  </div>
)
