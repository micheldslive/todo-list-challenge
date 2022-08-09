import axios from 'axios'
import { ErrorHandler } from 'core/handler/errorHanlder'
import { IToDoListResponse, ITodosList, IUsersList } from 'core/types'

export const ToDoListAPI = () => {
  const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  })

  const ListUsers = async (): Promise<IUsersList[]> => {
    const { errorHandler } = new ErrorHandler()
    const [error, response] = await errorHandler(api.get(`/users`))
    if (error) throw new Error(error.message)
    return response.data
  }

  const ToDosListUserId = async (userId: number): Promise<ITodosList[]> => {
    const { errorHandler } = new ErrorHandler()
    const [error, response] = await errorHandler(
      api.get(`/todos?userId=${userId}`)
    )
    if (error) throw new Error(error.message)
    return response.data
  }

  const ToDosListUpdate = async (
    todoId: number,
    completed: boolean
  ): Promise<IToDoListResponse> => {
    const { errorHandler } = new ErrorHandler()
    const [error, response] = await errorHandler(
      api.patch(`/todos/${todoId}`, {
        body: JSON.stringify({
          completed
        }),
        headers: {
          'Content-type': 'application/json charset=UTF-8'
        }
      })
    )

    const { data, status } = response
    if (error) throw new Error(error.message)

    return { data, status }
  }

  const DeleteToDoItem = async (todoId: number): Promise<ITodosList[]> => {
    const { errorHandler } = new ErrorHandler()
    const [error, response] = await errorHandler(api.delete(`/todos/${todoId}`))

    if (error) throw new Error(error.message)
    return response.status
  }

  const CreateToDoList = async (body: ITodosList): Promise<ITodosList> => {
    const { errorHandler } = new ErrorHandler()
    const [error, response] = await errorHandler(
      api.post(`/todos/`, {
        body: JSON.stringify({
          body
        }),
        headers: {
          'Content-type': 'application/json charset=UTF-8'
        }
      })
    )

    if (error) throw new Error(error.message)
    return response.status
  }

  return {
    ListUsers,
    ToDosListUserId,
    ToDosListUpdate,
    DeleteToDoItem,
    CreateToDoList
  }
}
