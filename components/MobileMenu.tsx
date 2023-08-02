import { useState } from 'react'
import { links } from './NavbarMenu'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ToggleButton } from './ToggleButton'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 36px) 36px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(24px at calc(100% - 36px) 36px )',
    transition: {
      delay: 0.0,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className='absolute right-0 top-0 text-white'>

          <motion.div
            variants={sidebar}
            className='fixed right-0 top-0 z-30 flex h-screen w-full flex-col items-center justify-around bg-brand-darkGray p-20 font-montserrat text-3xl font-bold uppercase sm:hidden'>
            {
              links.map(link => (
                <Link key={link.id} href={link.path}>{link.label}</Link>
              ))
              }
          </motion.div>
          <ToggleButton toggle={ () => { setIsOpen(state => !state) } }/>
        </motion.nav>

    </>
  )
}

export default MobileMenu
