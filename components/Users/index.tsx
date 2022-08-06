import { Title } from "components"
import { useTodoList } from "context"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { filteringUsers } from "utils/filteringArray"
import { MotionAnimated } from "utils/motionAnimated"

export const Users = () => {
  const { users, search, getAllUsers } = useTodoList()
  const router = useRouter()
  const filtered = filteringUsers(users, search)

  const handleClick = (id: number, name: string) => {
    router.push({
      pathname: "/todos/[id]",
      query: { id, name },
    })
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <MotionAnimated>
      <Title>Select a user</Title>
      <div className="rounded-2xl overflow-x-auto relative shadow-md animate-fadeIn max-w-md m-auto">
        <div className="w-full text-sm text-left text-gray-500">
          <div className="text-xs text-gray-700 uppercase bg-gray-50">
            <div className="flex items-center justify-between w-full">
              <span className="py-3 px-6">Username</span>
              <span className="py-3 px-6">Website</span>
            </div>
          </div>

          {filtered.length ? filtered.map(({ id, name, website }) => (
            <div onClick={() => handleClick(id, name)} key={id}>
              <div className="flex items-center justify-between bg-white border-b hover:bg-gray-50 cursor-pointer">
                <span className="py-4 px-6 font-medium text-gray-900">
                  {name}
                </span>
                <span className="py-4 px-6">{website}</span>
              </div>
            </div>
          )) :
          <div className="flex items-center justify-between bg-white border-b hover:bg-gray-50 cursor-pointer">
            <span className="py-4 px-6 text-gray-900">
              no search results found
            </span>
          </div>
          }
        </div>
      </div>
    </MotionAnimated>
  )
}
