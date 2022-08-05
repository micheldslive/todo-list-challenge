import classnames from "classnames"
import { CloseButton } from "components"
import { useTodoList } from "context"
import { IChildren, IModal } from "core/types"

export const Modal = ({ children, title }: IChildren & IModal) => {
  const { openModal, setOpenModal } = useTodoList()

  return (
    <>
      <div
        className={classnames(
          "modal-register bg-gray-900 bg-opacity-50 fixed inset-0 z-40",
          openModal ? "active" : ""
        )}
        onClick={() => setOpenModal(false)}
      />
      <div
        className={classnames(
          "rounded-sm modal-register modal-content fixed z-40 w-11/12 max-w-1/3 max-w-lg m-auto inset-x-0 inset-y-0 p-4 bg-white overflow-y-auto rounded-lg shadow",
          openModal ? "active" : ""
        )}
      >
        <div className="md:h-auto relative w-full h-full">
          <div className="relative h-full">
            <h1 className="sm:text-3xl font-arial text-4xl text-black">
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
