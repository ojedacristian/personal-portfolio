import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { type PropsWithChildren } from 'react'

const MotionWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  return (
        <motion.div
            key={router.route}
            initial={{ opacity: 0, x: '-100' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
        >
            { children }
        </motion.div>
  )
}
export default MotionWrapper
