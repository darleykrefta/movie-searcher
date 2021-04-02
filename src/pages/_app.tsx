import { AppProps } from 'next/app'
import { fetcher } from 'services/request'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { SWRConfig } from 'swr'

import { GlobalCSS } from 'components/GlobalCSS'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SWRConfig value={{ fetcher }}>
          <GlobalCSS />
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </>
  )
}

export default App
