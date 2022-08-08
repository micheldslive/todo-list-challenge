import LogoFooter from 'assets/images/logo-challenge-white.png'
import { positions } from 'mocks'
import Image from 'next/image'
import ReactTyped from 'react-typed'

export const Copyright = () => {
  return (
    <div className="flex items-center gap-x-5 sm:flex-col sm:justify-start">
      <div>
        <Image src={LogoFooter} width={45} height={35} alt="Logo Footer" />
      </div>
      <div className="flex flex-col justify-start sm:w-full sm:items-start sm:justify-start">
        <p className="font-arial text-lg text-white sm:text-sm">
          Todo List Challenge &copy; 2022
        </p>
        <p className="font-arial text-lg text-white sm:text-sm">
          <span className="text-tertiary">
            By Michel Domingos -{' '}
            <ReactTyped
              strings={positions}
              typeSpeed={80}
              backDelay={1100}
              backSpeed={30}
              loop
            />
          </span>
        </p>
      </div>
    </div>
  )
}
