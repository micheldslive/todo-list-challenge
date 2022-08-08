import { useTodoList } from 'context'
import { IChildren } from 'core/types'

export const OpenModal = ({ children }: IChildren) => {
  const { setOpenModal } = useTodoList()

  return (
    <button
      className={`my-8 rounded bg-primary py-2 px-4 font-bold text-white hover:opacity-90`}
      onClick={() => setOpenModal(true)}
    >
      {children}
    </button>
  )
}
