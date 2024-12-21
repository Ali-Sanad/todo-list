import type { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'

import { todosState } from '../state/atoms/todosState'
import { todoState } from '../state/atoms/todoState'

import { addTodo } from '../utils/add-todo/add-todo'
import { removeTodo } from '../utils/remove-todo/remove-todo'
import { toggleTodo } from '../utils/toggle-todo/toggle-todo'

export const useTodos = () => {
  const [newTodo, setNewTodo] = useRecoilState(todoState)
  const [todos, setTodos] = useRecoilState(todosState)

  const handleAddTodo = (newTodo: string) => {
    setTodos(addTodo(todos, newTodo))
    setNewTodo('')
  }

  const handleToggleTodo = (id: string) => {
    setTodos(toggleTodo(todos, id))
  }

  const handleDeleteTodo = (id: string) => {
    setTodos(removeTodo(todos, id))
  }

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value.trim())
  }

  return {
    newTodo,
    todos,
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo,
    handleTodoChange
  }
}
