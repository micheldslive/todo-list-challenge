import { useTodoList } from 'context'
import { ICreateToDo } from 'core/types'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CgSpinner } from 'react-icons/cg'

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
      completed
    }
    await createToDoList(body)
    reset()
    setOpenModal(false)
    setDisabled(false)
  }

  return (
    <form
      className="flex w-full flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6">
        <div className="w-full">
          <label
            className="mb-1 block pr-4 text-left font-bold text-gray-500"
            htmlFor="inline-full-name"
          >
            ToDo Title
          </label>
        </div>
        <div className="w-full">
          <textarea
            rows={5}
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700"
            id="inline-full-name"
            placeholder="Type your title here"
            {...register('title')}
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block cursor-pointer text-left font-bold text-gray-500">
          <input className="mr-2" type="checkbox" {...register('completed')} />
          <span className="text-sm">Active completed?</span>
        </label>
      </div>
      <div className="">
        <div className="w-full">
          <button
            className="flex items-center gap-2 rounded bg-primary py-2 px-4 font-bold text-white shadow hover:opacity-90"
            type="submit"
            disabled={disabled}
          >
            <CgSpinner className={disabled ? 'animate-spin' : 'hidden'} />
            Add ToDo
          </button>
        </div>
      </div>
    </form>
  )
}
