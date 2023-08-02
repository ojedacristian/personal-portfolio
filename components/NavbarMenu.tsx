'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface LinksNav {
  label: string
  path: string
  id: string
}

export const links: LinksNav[] = [
  {
    label: 'Home',
    path: '/',
    id: '1'
  },
  {
    label: 'About me',
    path: '/about',
    id: '2'

  },
  {
    label: 'Portfolio',
    path: '/portfolio',
    id: '3'
  },
  {
    label: 'Contact',
    path: '/contact',
    id: '4'
  }
]

interface Props {
  dark: boolean
}

export const NavbarMenu: React.FC<Props> = ({ dark }) => {
  const pathname = usePathname()

  return (
    <nav className='relative z-30 flex flex-1 items-center font-montserrat'>
          <div className='flex flex-col items-center gap-y-7 font-bold'>
            {
              links.map(link => {
                if (pathname === link.path) {
                  return (
                    <>
                      <motion.p layoutId='number' key={link.id} className='text-4xl sm:text-6xl'>0{link.id}</motion.p>
                      <motion.div layoutId='bullet' className={`flex h-3 w-3 items-center rounded-lg ${dark ? 'bg-brand-darkGray' : 'bg-white'}`}>
                        <motion.p layoutId='label' className='ml-8 uppercase'>{link.label}</motion.p>
                      </motion.div>
                      <motion.div layoutId='line' className={`h-24 w-[3px] ${dark ? 'bg-brand-darkGray' : 'bg-white'}`} />
                    </>
                  )
                } else {
                  return (
                    <Link key={link.id} href={link.path} className={`flex h-3 w-3 items-center rounded-lg ${dark ? 'bg-brand-lightGray' : 'bg-brand-gray'} group hover:bg-brand-orange`}>
                      <p className='ml-8 hidden text-sm uppercase text-brand-gray group-hover:block'>{ link.label}</p>
                      </Link>
                  )
                }
              }
              )
            }
          </div>
    </nav>
  )
}
