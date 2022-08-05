import classNames from "classnames"
import { DeleteButton } from "components"
import { useTodoList } from "context"
import { ITodosList } from "core/types"
import { MotionAnimated } from "utils/motionAnimated"

export const ToDoCard = ({ id, title, completed }: ITodosList) => {
  const { patchToDosList } = useTodoList()

  const handleToDosList = (id: number, completed: boolean) => {
    patchToDosList(id, completed)
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
      <label htmlFor={`${id}`} className="py-4 px-4 toDo">
        <div className="rounded-2xl overflow-hidden shadow-lg h-72 bg-white">
          <div className="py-4"></div>
          <div className="px-6 py-4">
            <div
              className={classNames(
                "sm:text-3xl font-bold text-3xl text-black mb-2",
                completed ? "text-green-600" : "text-black"
              )}
            >
              {completed ? "Completed" : "To Do"}
            </div>
            <p className="text-gray-700 text-base">{title}</p>
          </div>
        </div>
      </label>
    </div>
  )
}
