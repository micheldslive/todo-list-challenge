import { useTodoList } from 'context'
import { IDeleteBtn } from 'core/types'
import { MouseEvent } from 'react'
import { CgClose } from 'react-icons/cg'

export const DeleteButton = ({ id }: IDeleteBtn) => {
  const { deleteToDoList } = useTodoList()

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.disabled = true
    deleteToDoList(id)
  }

  return (
    <button
      className="absolute top-0 right-0 z-10 rounded-full bg-primary p-1"
      onClick={(event) => handleClick(event)}
    >
      <CgClose size={30} color="white" />
    </button>
  )
}
