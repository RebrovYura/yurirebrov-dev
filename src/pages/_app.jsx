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
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}
