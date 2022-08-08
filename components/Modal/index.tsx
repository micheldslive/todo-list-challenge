import classnames from 'classnames'
import { CloseButton } from 'components/CloseButton'
import { useTodoList } from 'context'
import { IChildren, IModal } from 'core/types'

export const Modal = ({ children, title }: IChildren & IModal) => {
  const { openModal, setOpenModal } = useTodoList()

  return (
    <>
      <div
        className={classnames(
          'modal-register fixed inset-0 z-40 bg-gray-900/50',
          openModal ? 'active' : ''
        )}
        onClick={() => setOpenModal(false)}
      />
      <div
        className={classnames(
          'modal-register modal-content fixed inset-0 z-40 m-auto w-11/12 max-w-lg overflow-y-auto rounded-lg bg-white p-4 shadow',
          openModal ? 'active' : ''
        )}
      >
        <div className="relative h-full w-full md:h-auto">
          <div className="relative h-full">
            <h1 className="font-arial text-4xl text-black sm:text-3xl">
              {title}
            </h1>
            <CloseButton />
            <div className="p-6 text-center">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
