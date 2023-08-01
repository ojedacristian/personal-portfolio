import { useState } from 'react'
import { MenuBarIcon } from './icons'
import { links } from './NavbarMenu'
import Link from 'next/link'
import { motion } from 'framer-motion'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(80px at 40px 40px)',
    transition: {
      delay: 0.5,
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
      <button onClick={() => {
        setIsOpen(state => !state)
        console.log(isOpen)
      }} className='absolute right-0 top-0 z-50 m-4 flex h-10 w-10 items-center justify-center text-white hover:bg-brand-darkGray sm:hidden'>
        <MenuBarIcon />
      </button>

      {
        isOpen &&
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          className='absolute inset-y-0 left-0 z-40 h-screen w-full text-white'>

          <motion.nav
            variants={sidebar}
            initial='closed'
            animate='open'
            exit='closed'
            className='flex h-screen flex-col items-center justify-around bg-brand-darkGray p-20 font-montserrat text-3xl font-bold uppercase'>
            {
              links.map(link => (
                <Link key={link.id} href={link.path}>{link.label}</Link>
              ))
            }
          </motion.nav>
        </motion.div>
      }
    </>
  )
}

export default MobileMenu
