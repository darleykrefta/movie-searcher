import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import { get } from 'services/request'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { SWRConfig } from 'swr'

import { GlobalCSS } from 'components/GlobalCSS'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{
            fetcher: async (url) => {
              const response = await get(url)

              return response.data
            }
          }}
        >
          <GlobalCSS />
          <Component {...pageProps} />

          <NextNprogress color="#7a8c99" startPosition={0.3} stopDelayMs={200} height={3} />
        </SWRConfig>
      </ThemeProvider>
    </>
  )
}

export default App
