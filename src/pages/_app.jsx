import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import '../styles/global.css'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence
      initial={true}
      mode='wait'
      onExitComplete={() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 })
        }
      }}
    >
      {/* <ThemeProvider attribute='class'> */}
        <Component {...pageProps} key={router.route} />
      {/* </ThemeProvider> */}
    </AnimatePresence>
  )
}
