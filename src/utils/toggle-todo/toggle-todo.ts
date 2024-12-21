import type { TodoItem } from '../../types'

export const toggleTodo = (todos: TodoItem[], id: string): TodoItem[] => {
  if (!id) return todos

  const updatedTodos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  )

  return updatedTodos
}
