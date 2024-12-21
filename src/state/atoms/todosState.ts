import { atom } from 'recoil'
import { v4 as uuidv4 } from 'uuid'

import { TodoItem } from '../../types'

const initialTodosState: TodoItem[] = [
  { id: uuidv4(), text: 'Milk', completed: false },
  { id: uuidv4(), text: 'Eggs', completed: false },
  { id: uuidv4(), text: 'Cheese', completed: false },
]

export const todosState = atom<TodoItem[]>({
  key: 'todosState',
  default: initialTodosState,
})
