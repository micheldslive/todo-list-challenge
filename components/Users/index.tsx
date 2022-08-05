import { Title } from "components"
import { useTodoList } from "context"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { filterValues } from "utils/filterValues"

export const Users = () => {
  const { users, filtered, getAllUsers } = useTodoList()
  const router = useRouter()

  const handleClick = (id: number, name: string) => {
    router.push({
      pathname: "/todos/[userId]",
      query: { userId: id, name: name },
    })
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <>
      <Title>Select a user</Title>

      <div className="rounded-2xl overflow-x-auto relative shadow-md animate-fadeIn">
        <div className="w-full text-sm text-left text-gray-500">
          <div className="text-xs text-gray-700 uppercase bg-gray-50">
            <div className="flex items-center justify-between w-full">
              <span className="py-3 px-6">Username</span>
              <span className="py-3 px-6">Website</span>
            </div>
          </div>

          {users?.map(({ id, name, website }) => (
            <div onClick={() => handleClick(id, name)} key={id}>
              {filterValues(name, filtered) ? (
                <div className="flex items-center justify-between bg-white border-b hover:bg-gray-50 cursor-pointer">
                  <span className="py-4 px-6 font-medium text-gray-900">
                    {name}
                  </span>
                  <span className="py-4 px-6">{website}</span>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
