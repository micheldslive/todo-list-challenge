import { Modal } from 'components/Modal'
import { OpenModal } from 'components/OpenModal'
import { Register } from 'components/Register'
import { Title } from 'components/Title'
import { ToDoCard } from 'components/ToDoCard'
import { useTodoList } from 'context'
import { useRouter } from 'next/router'
import { Fragment, useEffect } from 'react'
import { filteringTodos } from 'utils/filteringArray'
import { MotionAnimated } from 'utils/motionAnimated'

function Todos() {
  const { todos, search, getTodosByUser } = useTodoList()
  const router = useRouter()
  const userId = Number(router.query.id)
  const userName = String(router.query.name)
  const filtered = filteringTodos(todos, search)

  useEffect(() => {
    getTodosByUser(userId)
  }, [userId])

  return (
    <>
      <Title>Hello {userName}! wellcome to your List!</Title>
      <MotionAnimated>
        <div className="grid w-full grid-cols-4 gap-4 py-2 px-4 lg:grid-cols-3 hd:grid-cols-2 sm:grid-cols-1">
          {filtered.length ? (
            filtered.map(({ id, title, completed }) => (
              <Fragment key={id}>
                <ToDoCard id={id} title={title} completed={completed} />
              </Fragment>
            ))
          ) : (
            <span>no cards found in search</span>
          )}
        </div>
      </MotionAnimated>
      <OpenModal>Add ToDo</OpenModal>
      <Modal title="Create ToDo">
        <Register />
      </Modal>
    </>
  )
}

export default Todos
