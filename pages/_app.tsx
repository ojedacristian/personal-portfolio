import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function App ({ Component, pageProps }: AppProps): React.ReactElement {
  // const router = useRouter()
  return (
    <AnimatePresence mode='wait'>
      {/* <motion.div
        key={router.route}
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 0 }}
        className=''
      > */}
        <Component {...pageProps} />
      {/* </motion.div> */}
    </AnimatePresence>
  )
}
