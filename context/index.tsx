import { toast } from "react-toastify"
import { ToDoListAPI } from "core/api/Api"
import {
  IChildren,
  IListUsers,
  IToDoListContext,
  ITodosList,
} from "core/types"
import { createContext, useContext, useState } from "react"
import { deleteValue } from "utils/deleteValues"

const defaultList: IToDoListContext = {
  openModal: false,
  setOpenModal: () => false,
  users: [],
  todos: [],
  setTodos: () => [],
  filtered: "",
  setFiltered: () => "",
  getAllUsers: async () => undefined,
  getTodosByUser: async () => undefined,
  filterList: () => null,
  patchToDosList: async () => undefined,
  deleteToDoList: async () => undefined,
  createToDoList: async () => undefined,
}

const ToDoListContext = createContext(defaultList)

export const useTodoList = () => useContext(ToDoListContext)

export const TodoListProvider = ({ children }: IChildren) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [users, setUsers] = useState<IListUsers[]>([])
  const [todos, setTodos] = useState<ITodosList[]>([])
  const [filtered, setFiltered] = useState<string>("")

  const getAllUsers = async () => {
    const { ListUsers } = ToDoListAPI()
    const result = await ListUsers()
    setUsers(result)
  }

  const getTodosByUser = async (userId: number) => {
    const { ToDosListUserId } = ToDoListAPI()
    try {
      const result = await ToDosListUserId(userId)
      setTodos(result)
    } catch (error) {
      console.error(error)
    }
  }

  const patchToDosList = async (todoId: number, completed: boolean) => {
    const { ToDosListUpdate } = ToDoListAPI()
    try {
      todos.map((todo) => {
        todo.id == todoId && (todo.completed = completed)
      })
      setTodos([...todos])
      const { status } = await ToDosListUpdate(todoId, completed)
      toast.success("Success when changed ToDo Card - status:" + status)
    } catch (error) {
      toast.success("Error when changed ToDo Card - error:" + error)
      console.error(error)
    }
  }

  const deleteToDoList = async (todoId: number) => {
    const { DeleteToDoItem } = ToDoListAPI()
    try {
      const status = await DeleteToDoItem(todoId)
      setTodos(deleteValue(todos, todoId))
      toast.success("Success when deleted ToDo Card - status:" + status)
    } catch (error) {
      toast.success("Error when deleted ToDo Card - error:" + error)
      console.error(error)
    }
  }

  const createToDoList = async (body: ITodosList) => {
    const { CreateToDoList } = ToDoListAPI()
    try {
      const status = await CreateToDoList(body)
      setTodos([...todos, body])
      toast.success("Success when created ToDo Card - status:" + status)
    } catch (error) {
      toast.success("Error when created ToDo Card - error:" + error)
      console.error(error)
    }
  }

  const filterList = (filtered: string) => {
    setFiltered(filtered.toLocaleLowerCase())
  }

  return (
    <ToDoListContext.Provider
      value={{
        openModal,
        setOpenModal,
        users,
        todos,
        setTodos,
        filtered,
        setFiltered,
        getAllUsers,
        getTodosByUser,
        filterList,
        patchToDosList,
        deleteToDoList,
        createToDoList,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  )
}
