import { IChildren } from 'core/types'

export const Title = ({ children }: IChildren) => {
  return (
    <h1 className="my-10 animate-fadeIn text-center font-arial text-4xl text-black sm:text-3xl">
      {children}
    </h1>
  )
}
