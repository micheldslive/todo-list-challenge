import { ILink } from 'core/types'
import { useRouter } from 'next/router'

export const Link = ({ content, href, color }: ILink) => {
  const { push } = useRouter()
  return (
    <button
      className="p-1 font-arial text-lg transition-all hover:text-slate-900"
      onClick={() => push(href)}
    >
      <span className={color}>{content}</span>
    </button>
  )
}

export default Link
