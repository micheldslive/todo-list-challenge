import { Title } from "components"
import { Modal } from "components"
import { OpenModal } from "components"
import { Register } from "components"
import { ToDoCard } from "components"
import { useTodoList } from "context"
import { useRouter } from "next/router"
import { Fragment, useEffect } from "react"
import { Template } from "template"
import { filterValues } from "utils/filterValues"

function Todos() {
  const { todos, filtered, getTodosByUser } = useTodoList()
  const router = useRouter()
  const userId = Number(router.query.userId)
  const userName = String(router.query.name)

  useEffect(() => {
    userId && getTodosByUser(userId)
  }, [userId])

  return (
    <Template>
      <Title>Hello {userName}! wellcome to your List!</Title>
      <div className="grid grid-cols-4 gap-4 lg:grid-cols-3 hd:grid-cols-2 sm:grid-cols-1 py-2 px-4 w-full">
        {todos.map(({id, title, completed}) =>
          filterValues(title, filtered) && (
            <Fragment key={id}>
              <ToDoCard id={id} title={title} completed={completed} />
            </Fragment>
          )
        )}
      </div>
      <OpenModal>Add ToDo</OpenModal>
      <Modal title="Create ToDo">
        <Register />
      </Modal>
    </Template>
  )
}

export default Todos
