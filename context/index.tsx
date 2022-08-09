import { ToDoListAPI } from 'core/api/Api'
import { IChildren, IToDoListContext, ITodosList, IUsersList } from 'core/types'
import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { deleteValue } from 'utils/deleteValues'

const defaultTodoList: IToDoListContext = {
  openModal: false,
  setOpenModal: () => false,
  users: [],
  todos: [],
  setTodos: () => [],
  search: '',
  getAllUsers: async () => undefined,
  getTodosByUser: async () => undefined,
  filterList: () => null,
  patchToDosList: async () => undefined,
  deleteToDoList: async () => undefined,
  createToDoList: async () => undefined
}

const ToDoListContext = createContext(defaultTodoList)

export const useTodoList = () => useContext(ToDoListContext)

export const TodoListProvider = ({ children }: IChildren) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [users, setUsers] = useState<IUsersList[]>([])
  const [todos, setTodos] = useState<ITodosList[]>([])
  const [search, setSearch] = useState<string>('')

  const getAllUsers = async () => {
    const { ListUsers } = ToDoListAPI()
    const response = await ListUsers()
    setUsers(response)
  }

  const getTodosByUser = async (userId: number) => {
    const { ToDosListUserId } = ToDoListAPI()
    try {
      const response = await ToDosListUserId(userId)
      setTodos(response)
    } catch (error) {
      console.error(error)
    }
  }

  const patchToDosList = async (todoId: number, completed: boolean) => {
    const { ToDosListUpdate } = ToDoListAPI()
    try {
      const todo = todos.filter(({ id }) => id === todoId)
      todo[0].completed = completed
      setTodos([...todos])
      const { status } = await ToDosListUpdate(todoId, completed)
      toast.success(`Success when changed ToDo Card - status:${status}`)
    } catch (error) {
      toast.success(`Error when changed ToDo Card - error:${error}`)
    }
  }

  const deleteToDoList = async (todoId: number) => {
    const { DeleteToDoItem } = ToDoListAPI()
    try {
      const status = await DeleteToDoItem(todoId)
      setTodos(deleteValue(todos, todoId))
      toast.success(`Success when deleted ToDo Card - status:${status}`)
    } catch (error) {
      toast.success(`Error when deleted ToDo Card - error:${error}`)
    }
  }

  const createToDoList = async (body: ITodosList) => {
    const { CreateToDoList } = ToDoListAPI()
    try {
      const status = await CreateToDoList(body)
      setTodos([...todos, body])
      toast.success(`Success when created ToDo Card - status:${status}`)
    } catch (error) {
      toast.success(`Error when created ToDo Card - error:${error}`)
    }
  }

  const filterList = (value: string) => {
    setSearch(value.toLocaleLowerCase())
  }

  return (
    <ToDoListContext.Provider
      value={{
        openModal,
        setOpenModal,
        users,
        todos,
        setTodos,
        search,
        getAllUsers,
        getTodosByUser,
        filterList,
        patchToDosList,
        deleteToDoList,
        createToDoList
      }}
    >
      {children}
    </ToDoListContext.Provider>
  )
}
