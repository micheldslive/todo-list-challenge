import { Title } from 'components/Title'
import { contacts } from 'mocks'
import { memo } from 'react'
import { MotionAnimated } from 'utils/motionAnimated'

function Contact() {
  const { name, networks } = contacts

  return (
    <>
      <Title>Contact-me</Title>
      <MotionAnimated>
        <div className="h-40 max-w-sm overflow-hidden rounded bg-white shadow-lg smd:w-96">
          <div className="px-6 py-4">
            <p className="mb-2 text-xl font-bold">{name}</p>
            <br />
            {networks.map(({ title, href }) => (
              <p className="text-base text-gray-700" key={title}>
                <a href={href} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </p>
            ))}
          </div>
        </div>
      </MotionAnimated>
    </>
  )
}

export default memo(Contact)
