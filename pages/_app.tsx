import 'styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { Toast } from 'components/Toast'
import { TodoListProvider } from 'context'
import type { AppProps } from 'next/app'
import { Template } from 'template'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoListProvider>
      <Template>
        <Component {...pageProps} />
        <Toast />
      </Template>
    </TodoListProvider>
  )
}

export default MyApp
