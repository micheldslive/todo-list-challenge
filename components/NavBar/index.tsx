import { Link } from 'components/Link'

export const NavBar = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-x-9">
      <Link content="Home" href="/" color="text-black" />
      <Link content="Contact" href="/contact" color="text-black" />
    </div>
  )
}
