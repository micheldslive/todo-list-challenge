import { useTodoList } from "context"
import { GrClose } from "react-icons/gr"

export const CloseButton = () => {
  const { setOpenModal } = useTodoList()

  return (
    <button
      className="absolute top-2.5 right-2.5"
      onClick={() => setOpenModal(false)}
    >
      <GrClose size={20} />
    </button>
  )
}
