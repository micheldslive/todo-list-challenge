import "styles/globals.css"
import 'react-toastify/dist/ReactToastify.css'
import type { AppProps } from "next/app"
import { TodoListProvider } from "context"
import { Toast } from "components/Toast"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoListProvider>
      <Component {...pageProps} />
      <Toast />
    </TodoListProvider>
  )
}

export default MyApp
