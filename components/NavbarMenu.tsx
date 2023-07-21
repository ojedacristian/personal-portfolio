'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface LinksNav {
  label: string
  path: string
  id: string
}

const links: LinksNav[] = [
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
    <nav className='absolute flex h-screen items-center p-8 font-montserrat'>
          <div className='flex flex-col items-center gap-y-7 font-bold'>
            {
              links.map(link => {
                if (pathname === link.path) {
                  return (
                    <>
                      <p key={link.id} className='text-6xl'>0{link.id}</p>
                      <div className={`flex h-3 w-3 items-center rounded-lg ${dark ? 'bg-brand-darkGray' : 'bg-white'}`}><p className='ml-8 uppercase'>{link.label}</p></div>
                      <div className={`h-24 w-[3px] ${dark ? 'bg-brand-darkGray' : 'bg-white'}`} />
                    </>
                  )
                } else {
                  return (
                    <Link key={link.id} href={link.path} className={`flex h-3 w-3 items-center rounded-lg ${dark ? 'bg-brand-lightGray' : 'bg-brand-gray'} `}>
                      <p className='ml-8 hidden'>{ link.label}</p>
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
