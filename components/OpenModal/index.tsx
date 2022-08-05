import { useTodoList } from "context"
import { IChildren } from "core/types"

export const OpenModal = ({ children}: IChildren) => {
  const { setOpenModal } = useTodoList()

  return (
    <button
      className={`bg-primary text-white text-white font-bold py-2 px-4 mt-8 mb-8 rounded hover:opacity-90`}
      onClick={() => setOpenModal(true)}
    >
      {children}
    </button>
  )
}
