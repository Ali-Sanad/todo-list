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
    handleTodoChange
  } = useTodos()

  return (
    <div className='w-full min-h-screen min-w-[310px] bg-white p-4 md:p-8 font-mono'>
      <div className='max-w-4xl mx-auto mt-20'>
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
