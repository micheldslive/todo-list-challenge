import { NavBar } from "components"
import { Logo } from "components"
import { SearchBar } from "components"
import { memo } from "react"

const Header = () => {
  return (
    <header className="md:px-4 bg-white py-5 px-6 sticky top-0 w-full bg-white z-20">
      <div className="flex flex-row items-center justify-between flex-wrap gap-4">
        <Logo />
        <NavBar />
        <SearchBar />
      </div>
    </header>
  )
}

export default memo(Header)
