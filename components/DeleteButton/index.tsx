import { useTodoList } from "context"
import { IDeleteBtn } from "core/types"
import { MouseEvent } from "react"
import { CgClose } from "react-icons/cg"

export const DeleteButton = ({ id }: IDeleteBtn) => {
  const { deleteToDoList } = useTodoList()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.disabled = true
    deleteToDoList(id)
  }

  return (
    <button
      className="z-10 absolute top-0 right-0 py-1 px-1 rounded-full bg-primary"
      onClick={(event) => handleClick(event)}
    >
      <CgClose size={30} color="white" />
    </button>
  )
}
