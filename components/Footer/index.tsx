import { Copyright } from 'components/Copyright'
import { Social } from 'components/Social'
import { memo } from 'react'

const Footer = () => {
  return (
    <footer className="flex h-40 w-full flex-row items-center justify-evenly bg-primary py-5 px-6 md:px-4 sm:gap-y-5">
      <div className="flex w-full flex-row justify-between gap-5 smd:items-center sm:flex-col">
        <Copyright />
        <Social />
      </div>
    </footer>
  )
}

export default memo(Footer)
