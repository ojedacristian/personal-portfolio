import { Montserrat, Lato } from 'next/font/google'
import { type NextPage } from 'next'
import { MenuBarIcon, LinkedinIcon, MailIcon, GithubIcon, WhatsappIcon, ArrowRight } from '../components/icons'
import { Layout } from '@/components/Layout'

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

const HomePage: NextPage = () => {
  return (
    <Layout>
      {/* BACKGROUND */}
      <div className='absolute -z-40 h-screen w-full bg-[#333] opacity-90' />
      <div className="absolute -z-50 h-screen w-full bg-[url('/homebg.jpg')] bg-cover bg-no-repeat grayscale" />
      {/* BACKGROUND END */}
      <main
        className={`${lato.variable} ${montserrat.variable} h-screen text-white`}
      >
        <header className='absolute flex w-full justify-between p-10'>
          <div className='text-5xl font-bold uppercase text-brand-gray'>vz</div>
          <MenuBarIcon />
        </header>
        <aside className='absolute flex h-screen w-full items-center justify-between p-8 font-montserrat'>
          <div className='flex flex-col items-center gap-7 font-bold'>
            <p className='text-6xl'>01</p>
            <div className='flex h-3 w-3 items-center rounded-lg bg-white'><p className='ml-8'>HOME</p></div>
            <div className='h-24 w-[3px] bg-white'/>
            <div className='h-3 w-3 rounded-lg bg-brand-gray'/>
            <div className='flex h-3 w-3 items-center rounded-lg bg-brand-gray'><p className='ml-8 hidden'>ABOUT</p></div>
            <div className='h-3 w-3 rounded-lg bg-brand-gray'/>
            <div className='h-3 w-3 rounded-lg bg-brand-gray'/>
          </div>
          <nav className='flex flex-col gap-10'>
            <GithubIcon />
            {/* <LinkedinIcon /> */}
            <MailIcon />
            <WhatsappIcon/>
            <LinkedinIcon />
          </nav>
        </aside>
        <div className='absolute -z-20 flex h-screen w-full items-center justify-center overflow-hidden pl-96 pr-32 text-[900px] font-bold leading-[0] text-brand-orange opacity-50'>
          <h1 className='font-montserrat'>V</h1>
        </div>
        <div id='mask' className='absolute -z-30 flex h-screen w-full items-center justify-center overflow-hidden pl-96 pr-32 font-bold leading-[0]'>
          <h1 className='font-montserrat text-[900px]'>V</h1>
        </div>
        <section className='container mx-auto flex h-screen items-center justify-center'>
          <div className='mr-60'>
            <h1 className='font-montserrat text-7xl font-bold uppercase tracking-[.35em]'>Vanzer</h1>
            <h2 className='my-4 font-lato text-xl font-bold uppercase tracking-[0.15em] text-brand-gray'>Free creative psd template for you</h2>
            <span className='mb-7 mt-10 block h-[3px] w-2/5 bg-brand-orange' />
            <div className='flex items-center'>
              <p className='mr-2 font-montserrat text-sm font-bold uppercase'>
                Read More
              </p>
              <ArrowRight/>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
export default HomePage
