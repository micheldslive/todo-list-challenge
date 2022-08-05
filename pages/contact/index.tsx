import { Title } from "components"
import { contacts } from "mocks"
import { memo } from "react"
import { Template } from "template"
import { MotionAnimated } from "utils/motionAnimated"

function Contact() {
  const { name, networks } = contacts

  return (
    <Template>
      <Title>Contact-me</Title>
      <MotionAnimated>
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-40 smd:w-96 bg-white">
          <div className="px-6 py-4">
            <p className="font-bold text-xl mb-2">{name}</p>
            <br />
            {networks.map(({ title, href }) => (
              <p className="text-gray-700 text-base">
                <a href={href} target="_blank">
                  {title}
                </a>
              </p>
            ))}
          </div>
        </div>
      </MotionAnimated>
    </Template>
  )
}

export default memo(Contact)
