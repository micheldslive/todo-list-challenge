import { Dispatch, ReactNode, SetStateAction } from "react"

export interface IChildren {
  children: ReactNode
}

export interface IMainProps extends IChildren {
  meta: ReactNode
}

export interface IToDoListContext {
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
  users: IUsersList[]
  todos: ITodosList[]
  setTodos: Dispatch<SetStateAction<ITodosList[]>>
  search: string
  getAllUsers: () => Promise<void>
  getTodosByUser: (userId: number) => Promise<void>
  filterList: (filtered: string) => void
  patchToDosList: (todoId: number, completed: boolean) => Promise<void>
  deleteToDoList: (todoId: number) => Promise<void>
  createToDoList: (body: ITodosList) => Promise<void>
}

export interface IToDoListResponse {
  data: ITodosList[]
  status: number
}
export interface IUsersList {
  id: number
  name: string
  username: string
  email: string
  address: IUsersListAdress
  phone: string
  website: string
  company: IUsersListCompany
}

export interface IUsersListAdress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

export interface IUsersListCompany {
  name: string
  catchPhrase: string
  bs: string
}

export interface ICreateToDo {
  title: string
  completed: boolean
}

export interface ITodosList extends ICreateToDo {
  userId?: number
  id: number
  title: string
  completed: boolean
}

export interface IUserId {
  userId: string
}

export interface IErrorHandler {
  errorHandler(promise: Promise<unknown>): Promise<unknown>
}

export interface ILink {
  content: string
  href: string
  color: string
}

export interface IModal {
  title?: string
}

export interface IDeleteBtn {
  id: number
}