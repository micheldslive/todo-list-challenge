import { IChildren } from "core/types"

export const Title = ({ children }: IChildren) => {
  return (
    <h1 className="sm:text-3xl my-10 font-arial text-center text-4xl text-black animate-fadeIn">
      {children}
    </h1>
  )
}
