import Head from 'next/head'
import { GithubIcon, LinkedinIcon, MailIcon, MenuBarIcon, WhatsappIcon } from './icons'
import { Montserrat, Lato } from 'next/font/google'
import Link from 'next/link'

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

export const Layout: React.FC<Props> = ({ children, title = 'Cristian Ojeda - Portfolio', dark = false }: Props) => {
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
        className={`${lato.variable} ${montserrat.variable} h-screen ${dark ? 'text-brand-darkGray' : 'text-white'}`}
      >
        <header className='absolute flex w-full justify-between px-10 pt-10'>
          <Link href='/' className='text-5xl font-bold uppercase'>vz</Link>
          <MenuBarIcon />
        </header>
        <aside className='absolute -z-20 flex h-screen w-full items-center justify-between p-8 font-montserrat'>
          <div className='flex flex-col items-center gap-7 font-bold'>
            <p className='text-6xl'>01</p>
            <div className={`flex h-3 w-3 items-center rounded-lg ${dark ? 'bg-brand-darkGray' : 'bg-white'}`}><p className='ml-8'>HOME</p></div>
            <div className={ `h-24 w-[3px] ${dark ? 'bg-brand-darkGray' : 'bg-white'}`}/>
            <div className={`h-3 w-3 rounded-lg ${dark ? 'bg-brand-lightGray' : 'bg-brand-gray'} `}/>
            <div className='flex h-3 w-3 items-center rounded-lg bg-brand-gray'><p className='ml-8 hidden'>ABOUT</p></div>
            <div className={`h-3 w-3 rounded-lg ${dark ? 'bg-brand-lightGray' : 'bg-brand-gray'} `}/>
            <div className={`h-3 w-3 rounded-lg ${dark ? 'bg-brand-lightGray' : 'bg-brand-gray'}`}/>
          </div>
          <nav className='hidden flex-col gap-10 xl:flex'>
            <a href='github.com' target='_blank'>
              <GithubIcon />
            </a>
            <MailIcon />
            <WhatsappIcon/>
            <LinkedinIcon />
          </nav>
        </aside>
        {children}
      </main>

    </>
  )
}
