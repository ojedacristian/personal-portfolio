'use client'
import Head from 'next/head'
import { GithubIcon, LinkedinIcon, MailIcon } from './icons'
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
        className={`${lato.variable} ${montserrat.variable} relative h-screen ${dark ? 'text-brand-darkGray' : 'text-white'} ${bg} flex flex-col`}
      >
        <header className='relative z-10 flex w-full justify-between px-10 pt-10'>
          <Link href='/' className='text-5xl font-bold uppercase'>vz</Link>
        </header>
        <div className='flex h-full justify-between gap-20 px-8'>
          <NavbarMenu dark={dark}/>
          {children}
          <NavbarSocial/>
        </div>
      </main>

    </>
  )
}
