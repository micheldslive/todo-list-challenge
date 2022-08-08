import { Title } from 'components/Title'
import { useTodoList } from 'context'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { filteringUsers } from 'utils/filteringArray'
import { MotionAnimated } from 'utils/motionAnimated'

export const Users = () => {
  const { users, search, getAllUsers } = useTodoList()
  const router = useRouter()
  const filtered = filteringUsers(users, search)

  const handleClick = (id: number, name: string) => {
    router.push({
      pathname: '/todos/[id]',
      query: { id, name }
    })
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <MotionAnimated>
      <Title>Select a user</Title>
      <div className="relative m-auto max-w-md animate-fadeIn overflow-x-auto rounded-2xl shadow-md">
        <div className="w-full text-left text-sm text-gray-500">
          <div className="bg-gray-50 text-xs uppercase text-gray-700">
            <div className="flex w-full items-center justify-between">
              <span className="py-3 px-6">Username</span>
              <span className="py-3 px-6">Website</span>
            </div>
          </div>

          {filtered.length ? (
            filtered.map(({ id, name, website }) => (
              <div onClick={() => handleClick(id, name)} key={id}>
                <div className="flex cursor-pointer items-center justify-between border-b bg-white hover:bg-gray-50">
                  <span className="py-4 px-6 font-medium text-gray-900">
                    {name}
                  </span>
                  <span className="py-4 px-6">{website}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="flex cursor-pointer items-center justify-between border-b bg-white hover:bg-gray-50">
              <span className="py-4 px-6 text-gray-900">
                no search results found
              </span>
            </div>
          )}
        </div>
      </div>
    </MotionAnimated>
  )
}
