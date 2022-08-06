import { useTodoList } from "context"
import { FiSearch } from "react-icons/fi"

export const SearchBar = () => {
  const { filterList, search } = useTodoList()

  const handleFilterList = (value: string) => {
    filterList(value)
  }

  return (
    <div className="sm:w-full smd:w-96 flex flex-row items-center justify-center">
      <div className="flex">
        <div className="relative">
          <input
            type="search"
            className="smd:w-96 md:w-60 p-2.5 z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Search..."
            value={search}
            required
            onChange={(e) => handleFilterList(e.currentTarget.value)}
          />
          <span
            className="absolute top-0 right-0 p-2.5 text-sm bg-secondary border-secondary font-medium text-white rounded-r-lg border"
          >
            <FiSearch size={20} />
          </span>
        </div>
      </div>
    </div>
  )
}
