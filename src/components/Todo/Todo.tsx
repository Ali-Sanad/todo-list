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
  onDeleteTodo,
}: Props) => (
  <li className="group flex items-center gap-4 border-b border-gray-200 py-4 first:border-t">
    <input
      type="checkbox"
      id={`todo-checkbox-${id}`}
      checked={completed}
      onChange={() => onToggleTodo(id)}
      className="hidden"
    />

    <label
      htmlFor={`todo-checkbox-${id}`}
      role="checkbox"
      aria-checked={completed ? 'true' : 'false'}
      tabIndex={0}
      className={clsx(
        'flex h-6 min-h-6 w-6 min-w-6 cursor-pointer items-center justify-center rounded-full border-2',
        {
          'border-purple-500': !completed,
          'border-green-500 bg-green-500': completed,
        }
      )}
      onKeyDown={e => {
        //  Check for Enter or Space key press
        if (e.key === 'Enter' || e.key === ' ') {
          onToggleTodo(id)
        }
      }}
    />

    <div className="flex flex-1 items-center justify-between">
      <label
        htmlFor={`todo-checkbox-${id}`}
        className={clsx(
          'cursor-pointer overflow-hidden text-ellipsis break-all text-lg font-medium text-gray-800',
          {
            'line-through': completed,
          }
        )}
      >
        {text}
      </label>

      <XCircleIcon
        className="hidden size-6 cursor-pointer text-red-500 group-hover:block"
        onClick={() => onDeleteTodo(id)}
      />
    </div>
  </li>
)
