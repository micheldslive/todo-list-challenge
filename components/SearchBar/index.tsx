import { useTodoList } from 'context'
import { FiSearch } from 'react-icons/fi'

export const SearchBar = () => {
  const { filterList, search } = useTodoList()

  const handleFilterList = (value: string) => {
    filterList(value)
  }

  return (
    <div className="flex flex-row items-center justify-center smd:w-96 sm:w-full">
      <div className="flex">
        <div className="relative">
          <input
            type="search"
            className="z-20 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 md:w-60 smd:w-96"
            placeholder="Search..."
            value={search}
            required
            onChange={(e) => handleFilterList(e.currentTarget.value)}
          />
          <span className="absolute top-0 right-0 rounded-r-lg border border-secondary bg-secondary p-2.5 text-sm font-medium text-white">
            <FiSearch size={20} />
          </span>
        </div>
      </div>
    </div>
  )
}
