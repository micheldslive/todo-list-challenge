import LogoImage from 'assets/images/logo-challenge.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Logo = () => {
  const { push } = useRouter()

  return (
    <button onClick={() => push('/')}>
      <Image src={LogoImage} width={60} height={50} alt="Logo Header" />
    </button>
  )
}
