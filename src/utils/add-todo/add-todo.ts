import { v4 as uuidv4 } from 'uuid'

import type { TodoItem } from '../../types'

export const addTodo = (todos: TodoItem[], newTodo: string): TodoItem[] => {
  if (!newTodo.trim()) return todos

  const updatedTodos = [
    ...todos,
    { id: uuidv4(), text: newTodo, completed: false },
  ]

  return updatedTodos
}
