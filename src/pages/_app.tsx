import "../css/tailwind.css"
import "../css/prose.css"
import { Provider as UrqlProvider } from "urql"
import { useUrqlClient } from "$src/lib/urql-client"
import { Toaster } from "react-hot-toast"
import { ErrorPage } from "$src/components/app/ErrorPage"

const App = ({ Component, pageProps }: any) => {
  const urqlClient = useUrqlClient(pageProps.urqlState)
  if (pageProps.error) {
    return <ErrorPage error={pageProps.error} />
  }
  return (
    <UrqlProvider value={urqlClient}>
      <Component {...pageProps} />
      <Toaster />
    </UrqlProvider>
  )
}

export default App
