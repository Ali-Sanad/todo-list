import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, vi, expect, beforeEach } from 'vitest'
import { Todo } from './Todo'
import type { TodoItem } from '../../types'

const mockTodo: TodoItem = {
  id: '1',
  text: 'Sample Todo',
  completed: false
}

const mockOnToggleTodo = vi.fn()
const mockOnDeleteTodo = vi.fn()

const arrangeTest = () =>
  render(
    <Todo
      todo={mockTodo}
      onToggleTodo={mockOnToggleTodo}
      onDeleteTodo={mockOnDeleteTodo}
    />
  )

describe('Todo', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the todo item with correct text and icon', () => {
    arrangeTest()

    expect(screen.getByTestId('todo-text')).toBeInTheDocument()

    const checkbox = screen.getByTestId('todo-icon')
    expect(checkbox).toHaveAttribute('aria-checked', 'false')
  })

  describe('when the checkbox is clicked', () => {
    it('calls onToggleTodo with the todo id', () => {
      arrangeTest()

      const label = screen.getByTestId('todo-text')
      fireEvent.click(label)

      expect(mockOnToggleTodo).toHaveBeenCalledWith('1')
    })
  })

  describe('when the Enter or Space key is pressed', () => {
    it('calls onToggleTodo', () => {
      arrangeTest()

      const checkbox = screen.getByTestId('todo-icon')

      fireEvent.keyDown(checkbox, { key: 'Enter' })
      fireEvent.keyDown(checkbox, { key: ' ' })

      expect(mockOnToggleTodo).toHaveBeenCalledWith('1')
      expect(mockOnToggleTodo).toHaveBeenCalledTimes(2)
    })
  })

  describe('when the delete button is clicked', () => {
    it('calls onDeleteTodo with the todo id', () => {
      arrangeTest()

      const todo = screen.getByTestId('todo')
      fireEvent.mouseOver(todo)

      const deleteButton = screen.getByTestId('todo-delete')
      fireEvent.click(deleteButton)

      expect(mockOnDeleteTodo).toHaveBeenCalledWith('1')
    })
  })
})
