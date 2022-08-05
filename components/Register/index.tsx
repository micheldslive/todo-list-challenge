import { useTodoList } from "context"
import { ICreateToDo } from "core/types"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { CgSpinner } from "react-icons/cg"

export const Register = () => {
  const [disabled, setDisabled] = useState<boolean>(false)
  const { todos, setOpenModal, createToDoList } = useTodoList()
  const { register, handleSubmit, reset } = useForm<ICreateToDo>()

  const onSubmit: SubmitHandler<ICreateToDo> = async ({ title, completed }) => {
    setDisabled(true)
    const lastItem = [...todos].pop()
    const body = {
      id: lastItem?.id ? lastItem.id + 1 : Math.random(),
      userId: lastItem?.userId ? lastItem.userId : 0,
      title,
      completed,
    }
    await createToDoList(body)
    reset()
    setOpenModal(false)
    setDisabled(false)
  }

  return (
    <form
      className="w-full flex flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6">
        <div className="w-full">
          <label
            className="block text-gray-500 font-bold text-left mb-1 pr-4"
            htmlFor="inline-full-name"
          >
            ToDo Title
          </label>
        </div>
        <div className="w-full">
          <textarea
            rows={5}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
            id="inline-full-name"
            placeholder="Type your title here"
            {...register("title")}
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-500 font-bold cursor-pointer text-left">
          <input
            className="mr-2"
            type="checkbox"
            {...register("completed")}
          />
          <span className="text-sm">Active completed?</span>
        </label>
      </div>
      <div className="">
        <div className="w-full">
          <button
            className="shadow bg-primary hover:opacity-90 text-white font-bold py-2 px-4 rounded flex gap-2 items-center"
            type="submit"
            disabled={disabled}
          >
            <CgSpinner className={disabled ? "animate-spin" : "hidden"} />
            Add ToDo
          </button>
        </div>
      </div>
    </form>
  )
}
