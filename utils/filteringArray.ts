import { ITodosList, IUsersList } from "core/types"

export const filteringUsers = (users: IUsersList[], search: string) => {
  return users.filter(({ name }) => name.toLocaleLowerCase().includes(search))
}

export const filteringTodos = (todos: ITodosList[], search: string) => {
  return todos.filter(({ title }) => title.toLocaleLowerCase().includes(search))
}