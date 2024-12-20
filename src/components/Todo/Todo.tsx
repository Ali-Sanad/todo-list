import { XCircleIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

import type { TodoItem } from '../../types'

type Props = {
  todo: TodoItem
  onToggleTodo: (id: string) => void
  onDeleteTodo: (id: string) => void
}

export const Todo = ({
  todo: { id, text, completed },
  onToggleTodo,
  onDeleteTodo
}: Props) => (
  <li className='flex items-center py-4 border-b border-gray-200 gap-4 group first:border-t'>
    <input
      type='checkbox'
      id={`todo-checkbox-${id}`}
      checked={completed}
      onChange={() => onToggleTodo(id)}
      className='hidden'
    />

    <label
      htmlFor={`todo-checkbox-${id}`}
      role='checkbox'
      aria-checked={completed ? 'true' : 'false'}
      tabIndex={0}
      className={clsx(
        'w-6 h-6 min-h-6 min-w-6 flex items-center justify-center rounded-full border-2 cursor-pointer',
        {
          'border-purple-500 ': !completed,
          'bg-green-500 border-green-500': completed
        }
      )}
      onKeyDown={e => {
        //  Check for Enter or Space key press
        if (e.key === 'Enter' || e.key === ' ') {
          onToggleTodo(id)
        }
      }}
    />

    <div className='flex justify-between items-center flex-1'>
      <label
        htmlFor={`todo-checkbox-${id}`}
        className={clsx(
          'text-lg text-gray-800 cursor-pointer overflow-hidden text-ellipsis break-all font-medium',
          {
            'line-through': completed
          }
        )}
      >
        {text}
      </label>

      <XCircleIcon
        className='size-6 text-red-500 cursor-pointer hidden group-hover:block'
        onClick={() => onDeleteTodo(id)}
      />
    </div>
  </li>
)
