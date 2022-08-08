import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export const Social = () => {
  return (
    <div className="flex items-center gap-x-5 sm:justify-center">
      <a
        href="https://github.com/micheldslive"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="text-white" />
      </a>
      <a
        href="https://linkedin.com/in/micheldslive"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="text-white" />
      </a>
      <a href="mailto:micheldslive@gmail.com" target="_blank" rel="noreferrer">
        <FaEnvelope className="text-white" />
      </a>
    </div>
  )
}
