import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import { vi, describe, afterEach, it, expect } from 'vitest'

import { TodoList } from './TodoList'

type Todo = ComponentProps<typeof TodoList>['todos'][0]

vi.mock('../Todo/Todo', () => ({
  Todo: ({ todo }: { todo: Todo }) => <li>{todo.text}</li>
}))

const mockOnToggleTodo = vi.fn()
const mockOnDeleteTodo = vi.fn()

const arrangeTest = (props: ComponentProps<typeof TodoList>) =>
  render(<TodoList {...props} />)

describe('TodoList', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('when todos are provided', () => {
    it('renders the list of todos', () => {
      const todos: Todo[] = [
        { id: '1', text: 'First Todo', completed: false },
        { id: '2', text: 'Second Todo', completed: true }
      ]

      arrangeTest({
        todos,
        onToggleTodo: mockOnToggleTodo,
        onDeleteTodo: mockOnDeleteTodo
      })

      expect(screen.getByText('Todo List')).toBeInTheDocument()

      expect(screen.getByText('First Todo')).toBeInTheDocument()
      expect(screen.getByText('Second Todo')).toBeInTheDocument()

      expect(screen.queryByText('No todos found.')).not.toBeInTheDocument()
    })
  })

  describe('when no todos are provided', () => {
    it('renders not found message', () => {
      arrangeTest({
        todos: [],
        onToggleTodo: mockOnToggleTodo,
        onDeleteTodo: mockOnDeleteTodo
      })

      expect(screen.getByText('Todo List')).toBeInTheDocument()

      expect(screen.getByText('No todos found.')).toBeInTheDocument()

      expect(screen.queryByRole('listitem')).not.toBeInTheDocument()
    })
  })
})
