import { describe, it, expect } from 'vitest'

import { removeTodo } from './remove-todo'
import type { TodoItem } from '../../types'

describe('removeTodo', () => {
  it('removes the todo with the given id', () => {
    const todos: TodoItem[] = [
      { id: '1', text: 'Learn React', completed: false },
      { id: '2', text: 'Learn TypeScript', completed: false },
      { id: '3', text: 'Learn Tailwind', completed: false }
    ]

    const updatedTodos = removeTodo(todos, '2')

    expect(updatedTodos).toHaveLength(2)
    expect(updatedTodos).not.toContainEqual({
      id: '2',
      text: 'Learn TypeScript',
      completed: false
    })
  })

  describe('when the id is not found', () => {
    it('returns the same todos', () => {
      const todos: TodoItem[] = [
        { id: '1', text: 'Learn React', completed: false },
        { id: '2', text: 'Learn TypeScript', completed: false }
      ]

      const updatedTodos = removeTodo(todos, '3')

      expect(updatedTodos).toHaveLength(2)
      expect(updatedTodos).toEqual(todos)
    })
  })

  describe('when the id is an empty string', () => {
    it('returns the same todos', () => {
      const todos: TodoItem[] = [
        { id: '1', text: 'Learn React', completed: false },
        { id: '2', text: 'Learn TypeScript', completed: false }
      ]

      const updatedTodos = removeTodo(todos, '')

      expect(updatedTodos).toHaveLength(2)
      expect(updatedTodos).toEqual(todos)
    })
  })
})
