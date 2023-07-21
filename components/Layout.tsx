'use client'
import Head from 'next/head'
import { GithubIcon, LinkedinIcon, MailIcon, MenuBarIcon, WhatsappIcon } from './icons'
import { Montserrat, Lato } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  title?: string
  dark?: boolean
  children: React.ReactNode
}
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat'
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato'
})
// const origin = (typeof window === 'undefined') ? '' : window.location.origin
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

export const Layout: React.FC<Props> = ({ children, title = 'Cristian Ojeda - Portfolio', dark = false }: Props) => {
  const pathname = usePathname()
  console.log('Pathname', pathname)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Cristian Ojeda" />
        <meta name="description" content={`${title}`} />
        <meta name="keywords" content={`${title}, developer, frontend, desarrollador, web design`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        {/* <meta property="og:image" content={`${origin}/img/banner.png`} /> */}
      </Head>

      <main
        className={`${lato.variable} ${montserrat.variable} min-h-screen ${dark ? 'text-brand-darkGray' : 'text-white'}`}
      >
        <header className='absolute z-10 flex w-full justify-between px-10 pt-10'>
          <Link href='/' className='text-5xl font-bold uppercase'>vz</Link>
          {/* <Link href='/'>
            <MenuBarIcon />
          </Link> */}
        </header>
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
        <nav className='absolute right-8 hidden h-screen flex-col items-center justify-center gap-10 md:flex'>
          <a href='mailto:cristianojeda.maimo@gmail.com' className='text-brand-gray transition ease-in-out hover:scale-150 hover:text-brand-orange'>
          <MailIcon />
          </a>
          <a href='github.com' target='_blank' className='fill-brand-gray transition ease-in-out hover:scale-150 hover:fill-brand-orange'>
            <GithubIcon />
          </a>
          {/* <WhatsappIcon /> */}
          <a href='linkedin.com' className='fill-brand-gray text-brand-gray transition ease-in-out hover:scale-150 hover:fill-brand-orange'>
            <LinkedinIcon />
          </a>
        </nav>
        {children}
      </main>

    </>
  )
}
