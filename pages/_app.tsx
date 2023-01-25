import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'
import Layout from 'components/Layout'
import { ThemeProvider } from 'next-themes'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div className={poppins.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  )
}
