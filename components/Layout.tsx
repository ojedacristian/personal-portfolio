'use client'
import Head from 'next/head'
import { GithubIcon, LinkedinIcon, MailIcon, MenuBarIcon } from './icons'
import { Montserrat, Lato } from 'next/font/google'
import Link from 'next/link'
import { NavbarMenu } from './NavbarMenu'
import NavbarSocial from './NavbarSocial'

interface Props {
  title?: string
  dark?: boolean
  children: React.ReactNode
  bg?: string
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

export const Layout: React.FC<Props> = ({ children, title = 'Cristian Ojeda - Portfolio', dark = false, bg = '' }: Props) => {
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
        className={`${lato.variable} ${montserrat.variable} relative ${dark ? 'text-brand-darkGray' : 'text-white'} ${bg} flex min-h-screen justify-between`}
      >
        <aside className='hidden h-screen flex-col items-center pl-2 sm:pl-0 md:flex'>
          <header className='relative z-10 flex w-full justify-between pt-10 sm:px-10'>
            <Link href='/' className='text-4xl font-bold'>CO</Link>
          </header>
          <NavbarMenu dark={dark} />
        </aside>
        <div className='mx-auto flex h-full sm:px-8'>
          {children}
        </div>
        <NavbarSocial />
      </main>

    </>
  )
}
