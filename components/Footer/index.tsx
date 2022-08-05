import { memo } from "react"
import { Copyright } from "components"
import { Social } from "components"

const Footer = () => {
  return (
    <footer className="sm:gap-y-5 md:px-4 h-40 py-5 px-6 flex w-full flex-row bg-primary items-center justify-evenly">
      <div className="smd:items-center sm:flex-col flex w-full flex-row justify-between gap-5">
        <Copyright />
        <Social />
      </div>
    </footer>
  )
}

export default memo(Footer)