import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import { get } from 'services/request'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { SWRConfig } from 'swr'

import { GlobalCSS } from 'components/GlobalCSS'

import SEO from '../../next-seo.config'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

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
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />

          <NextNprogress color="#7a8c99" startPosition={0.3} stopDelayMs={200} height={3} />
        </SWRConfig>
      </ThemeProvider>
    </>
  )
}

export default App
