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
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.5
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const variantsItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
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
        exit='closed'
        className='absolute right-0 top-0 text-white'>

          <motion.div
            variants={sidebar}
            className='fixed right-0 top-0 z-30 h-screen w-full bg-brand-darkGray p-20 font-montserrat text-3xl font-bold uppercase 2xl:hidden'>
              <motion.ul
                className='flex h-full flex-col items-center justify-around'
              variants={variants}>
              {
                links.map(link => (
                  <motion.li variants={variantsItem} key={link.id}>
                    <Link onClick={() => { setIsOpen(state => !state) }} href={link.path} className='p-4 transition-all hover:tracking-[0.25em] hover:text-brand-orange'>
                      {link.label}
                    </Link>
                  </motion.li>
                ))
              }
              </motion.ul>
          </motion.div>
          <ToggleButton toggle={ () => { setIsOpen(state => !state) } }/>
        </motion.nav>

    </>
  )
}

export default MobileMenu
