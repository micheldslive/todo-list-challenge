import Footer from 'components/Footer'
import Header from 'components/Header'
import { IChildren } from 'core/types'
import Metas from 'layout'

export const Template = ({ children }: IChildren) => {
  return (
    <>
      <Metas />
      <Header />
      <main className="flex h-[128] w-full justify-center bg-quaternary">
        <section className="flex w-full flex-col items-center py-5">
          {children}
        </section>
      </main>
      <Footer />
    </>
  )
}
