import type { TodoItem } from '../../types'
import { Todo } from '../Todo/Todo'

type Props = {
  todos: TodoItem[]
  onToggleTodo: (id: string) => void
  onDeleteTodo: (id: string) => void
}

export const TodoList = ({ todos, onToggleTodo, onDeleteTodo }: Props) => (
  <>
    <h1 className="mb-6 text-3xl font-bold text-black">Todo List</h1>

    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  </>
)
