import { useTodos } from './hooks/useTodos'
import { AddTodo } from './components/AddTodo/AddTodo'
import { TodoList } from './components/TodoList/TodoList'

export const App = () => {
  const {
    newTodo,
    todos,
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo,
    handleTodoChange,
  } = useTodos()

  return (
    <div className="min-h-screen w-full min-w-[310px] bg-white p-4 font-mono md:p-8">
      <div className="mx-auto mt-20 max-w-4xl">
        <TodoList
          todos={todos}
          onToggleTodo={handleToggleTodo}
          onDeleteTodo={handleDeleteTodo}
        />

        <AddTodo
          newTodo={newTodo}
          onTodoChange={handleTodoChange}
          onAddTodo={handleAddTodo}
        />
      </div>
    </div>
  )
}
