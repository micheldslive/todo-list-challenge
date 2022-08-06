import type { AppProps } from "next/app"
import { TodoListProvider } from "context"
import { Toast } from "components"
import { Template } from "template"
import "styles/globals.css"
import "react-toastify/dist/ReactToastify.css"

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
