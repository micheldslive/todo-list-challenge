import { Title } from "components"
import { MotionAnimated } from "utils/motionAnimated"

export const Error404 = () => {
  return (
    <MotionAnimated>
      <Title>ERROR 404</Title>
      <div className="flex h-full items-center">
        <h1 className="border-r-2 pr-4 border-secondary font-bold text-primary">404</h1>
        <div className="pl-4">This page could not be found</div>
      </div>
    </MotionAnimated>
  )
}
