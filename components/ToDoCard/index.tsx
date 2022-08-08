import classNames from 'classnames'
import { DeleteButton } from 'components/DeleteButton'
import { useTodoList } from 'context'
import { ITodosList } from 'core/types'

export const ToDoCard = ({ id, title, completed }: ITodosList) => {
  const { patchToDosList } = useTodoList()

  const handleToDosList = (idTodo: number, completedTodo: boolean) => {
    patchToDosList(idTodo, completedTodo)
  }

  return (
    <div className="relative">
      <DeleteButton id={id} />
      <input
        className="toDo"
        type="checkbox"
        id={`${id}`}
        defaultChecked={completed}
        onClick={() => handleToDosList(id, !completed)}
      />
      <label htmlFor={`${id}`} className="toDo p-4">
        <div className="h-72 overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="py-4"></div>
          <div className="px-6 py-4">
            <div
              className={classNames(
                'sm:text-3xl font-bold text-3xl text-black mb-2',
                completed ? 'text-green-600' : 'text-black'
              )}
            >
              {completed ? 'Completed' : 'To Do'}
            </div>
            <p className="text-base text-gray-700">{title}</p>
          </div>
        </div>
      </label>
    </div>
  )
}
