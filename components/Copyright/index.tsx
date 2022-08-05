import Image from "next/image"
import LogoFooter from "assets/images/logo-challenge-white.png"
import ReactTyped from "react-typed"
import { positions } from "mocks"

export const Copyright = () => {
  return (
    <div className="sm:flex-col sm:justify-start flex items-center gap-x-5">
      <div>
        <Image src={LogoFooter} width={45} height={35} />
      </div>
      <div className="sm:w-full flex justify-start flex-col sm:justify-start sm:items-start">
        <p className="sm:text-sm font-arial text-lg text-white">
        Todo List Challenge &copy; 2022
        </p>
        <p className="sm:text-sm font-arial text-lg text-white">
          <span className="text-tertiary">
            By Michel Domingos - {" "}
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
