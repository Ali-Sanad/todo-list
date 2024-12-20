import type { TodoItem } from '../types'

export const removeTodo = (todos: TodoItem[], id: string): TodoItem[] => {
  if (!id) return todos

  const updatedTodos = todos.filter(todo => todo.id !== id)

  return updatedTodos
}
