import { Logo } from 'components/Logo'
import { NavBar } from 'components/NavBar'
import { SearchBar } from 'components/SearchBar'
import { memo } from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full bg-white py-5 px-6 md:px-4">
      <div className="flex flex-row flex-wrap items-center justify-between gap-4">
        <Logo />
        <NavBar />
        <SearchBar />
      </div>
    </header>
  )
}

export default memo(Header)
