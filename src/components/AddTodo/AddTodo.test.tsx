import type { ComponentProps } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, vi, expect, beforeEach } from 'vitest'

import { AddTodo } from './AddTodo'

const mockOnTodoChange = vi.fn()
const mockOnAddTodo = vi.fn()

const arrangeTest = (props: ComponentProps<typeof AddTodo>) =>
  render(<AddTodo {...props} />)

describe('AddTodo', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the input and button', () => {
    arrangeTest({
      newTodo: '',
      onTodoChange: mockOnTodoChange,
      onAddTodo: mockOnAddTodo
    })

    expect(
      screen.getByPlaceholderText('Memorize the dictionary')
    ).toBeInTheDocument()
    expect(screen.getByText('Add Item')).toBeInTheDocument()
  })

  describe('when the input value changes', () => {
    it('calls onTodoChange', () => {
      arrangeTest({
        newTodo: '',
        onTodoChange: mockOnTodoChange,
        onAddTodo: mockOnAddTodo
      })

      const input = screen.getByPlaceholderText('Memorize the dictionary')
      fireEvent.change(input, { target: { value: 'New Todo' } })

      expect(mockOnTodoChange).toHaveBeenCalled()
    })
  })

  describe('when the button is clicked', () => {
    it('calls onAddTodo with the correct value', () => {
      arrangeTest({
        newTodo: 'New Todo',
        onTodoChange: mockOnTodoChange,
        onAddTodo: mockOnAddTodo
      })

      const button = screen.getByText('Add Item')
      fireEvent.click(button)

      expect(mockOnAddTodo).toHaveBeenCalledWith('New Todo')
    })
  })

  describe('when the Enter key is pressed', () => {
    it('calls onAddTodo with the trimmed value', () => {
      arrangeTest({
        newTodo: '   New Todo   ',
        onTodoChange: mockOnTodoChange,
        onAddTodo: mockOnAddTodo
      })

      const input = screen.getByPlaceholderText('Memorize the dictionary')
      fireEvent.keyDown(input, { key: 'Enter' })

      expect(mockOnAddTodo).toHaveBeenCalledWith('New Todo')
    })
  })

  describe('when the input is empty or only whitespace', () => {
    it('does not call onAddTodo', () => {
      arrangeTest({
        newTodo: '   ',
        onTodoChange: mockOnTodoChange,
        onAddTodo: mockOnAddTodo
      })

      const input = screen.getByPlaceholderText('Memorize the dictionary')
      fireEvent.keyDown(input, { key: 'Enter' })

      expect(mockOnAddTodo).not.toHaveBeenCalled()
    })
  })
})
