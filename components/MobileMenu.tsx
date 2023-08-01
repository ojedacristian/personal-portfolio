import { useState } from 'react'
import { MenuBarIcon } from './icons'
import { links } from './NavbarMenu'
import Link from 'next/link'

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
        <>
            <button onClick={() => {
              setIsOpen(state => !state)
            }} className='absolute right-0 top-0 z-50 m-4  flex h-10 w-10 items-center justify-center rounded-full bg-brand-darkGray text-white sm:hidden'>
                <MenuBarIcon />
            </button>
            {
                isOpen &&
                <div className='absolute left-0 top-0 z-40 h-screen w-full bg-brand-darkGray'>
                    <nav className='flex h-screen flex-col items-center justify-around p-20 font-montserrat text-3xl font-bold uppercase'>
                        {
                            links.map(link => (
                                <Link key={link.id} href={link.path}>{link.label}</Link>
                            ))
                        }
                    </nav>
                </div>
            }
        </>
  )
}

export default MobileMenu
