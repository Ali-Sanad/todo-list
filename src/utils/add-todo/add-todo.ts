import { v4 as uuidv4 } from 'uuid'

import type { TodoItem } from '../../types'

export const addTodo = (
  todos: TodoItem[],
  newTodo: string
): TodoItem[] => {
  const trimmedNewTodo = newTodo.trim()

  if (!trimmedNewTodo) return todos

  const updatedTodos = [
    ...todos,
    { id: uuidv4(), text: trimmedNewTodo, completed: false }
  ]

  return updatedTodos
}
