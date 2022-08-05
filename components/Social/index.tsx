import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export const Social = () => {
  return (
    <div className="sm:justify-center flex items-center gap-x-5">
      <a href="https://github.com/micheldslive" target="_blank">
        <FaGithub className="text-white" />
      </a>
      <a href="https://linkedin.com/in/micheldslive" target="_blank">
        <FaLinkedin className="text-white" />
      </a>
      <a href="mailto:micheldslive@gmail.com" target="_blank">
        <FaEnvelope className="text-white" />
      </a>
    </div>
  )
}
