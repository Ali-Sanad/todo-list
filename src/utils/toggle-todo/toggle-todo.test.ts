import { describe, it, expect } from 'vitest'

import { toggleTodo } from './toggle-todo'
import type { TodoItem } from '../../types'

describe('toggleTodo', () => {
  it('toggles the completed status of the todo with the given id', () => {
    const todos: TodoItem[] = [
      { id: '1', text: 'Learn React', completed: false },
      { id: '2', text: 'Learn TypeScript', completed: false },
      { id: '3', text: 'Learn Tailwind', completed: false }
    ]

    const updatedTodos = toggleTodo(todos, '2')

    expect(updatedTodos).toHaveLength(3)
    expect(updatedTodos[1].completed).toBe(true)
  })

  describe('when the id is not found', () => {
    it('should return the same todos', () => {
      const todos: TodoItem[] = [
        { id: '1', text: 'Learn React', completed: false },
        { id: '2', text: 'Learn TypeScript', completed: false }
      ]

      const updatedTodos = toggleTodo(todos, '3')

      expect(updatedTodos).toHaveLength(2)
      expect(updatedTodos).toEqual(todos)
    })
  })

  describe('when the id is empty', () => {
    it('should return the same todos', () => {
      const todos: TodoItem[] = [
        { id: '1', text: 'Learn React', completed: false },
        { id: '2', text: 'Learn TypeScript', completed: false }
      ]

      const updatedTodos = toggleTodo(todos, '')

      expect(updatedTodos).toHaveLength(2)
      expect(updatedTodos).toEqual(todos)
    })
  })
})
