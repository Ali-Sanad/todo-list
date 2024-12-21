import { v4 as uuidv4 } from 'uuid'
import { expect, it, describe, vi } from 'vitest'
import { addTodo } from './add-todo'

vi.mock('uuid', () => ({
  v4: vi.fn(() => 'mocked-uuid')
}))

describe('addTodo', () => {
  it('adds a new todo item to the list', () => {
    const todos = [
      { id: 'existing-uuid', text: 'Existing Todo', completed: false }
    ]
    const newTodo = 'New Todo'

    const result = addTodo(todos, newTodo)

    expect(result).toHaveLength(2)
    expect(result[1].text).toBe(newTodo)
    expect(result[1].completed).toBe(false)
    expect(result[1].id).toBe('mocked-uuid')
  })

  describe('when newTodo is empty or whitespace', () => {
    it('does not add a todo', () => {
      const todos = [
        { id: 'existing-uuid', text: 'Existing Todo', completed: false }
      ]
      const newTodo = '    '

      const result = addTodo(todos, newTodo)

      expect(result).toHaveLength(1)
    })
  })

  it('calls uuidv4 to generate an id', () => {
    const todos = [
      { id: 'existing-uuid', text: 'Existing Todo', completed: false }
    ]
    const newTodo = 'Another Todo'

    addTodo(todos, newTodo)

    expect(uuidv4).toHaveBeenCalled()
  })
})
