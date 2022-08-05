import { Link } from "components"

export const NavBar = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-x-9">
      <Link content="Home" href="/" color="text-black" />
      <Link content="Contact" href="/contact" color="text-black" />
    </div>
  )
}
