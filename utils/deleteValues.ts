import { ITodosList } from "core/types"

export const deleteValue = (todos: ITodosList[], itemId: number) => {
  return todos.filter(({ id }) => id !== itemId)
}
