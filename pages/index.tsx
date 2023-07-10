import { Montserrat } from 'next/font/google'
import { type NextPage } from 'next'
import { MenuBarIcon, LinkedinIcon, MailIcon } from '../components/icons'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700']
})

const HomePage: NextPage = () => {
  return (
    <>
      {/* BACKGROUND */}
      <div className='absolute -z-40 h-screen w-full bg-[#333] opacity-90' />
      <div className="absolute -z-50 h-screen w-full bg-[url('/homebg.jpg')] bg-cover bg-no-repeat grayscale" />
      {/* BACKGROUND END */}
      <main
        className={`${montserrat.className} h-screen text-white`}
      >
        <header className='absolute flex w-full justify-between p-8'>
          <div className='text-5xl font-bold uppercase'>vz</div>
          <MenuBarIcon />
        </header>
        <aside className='absolute flex h-screen w-full items-center justify-between p-8'>
          <div className=''>01</div>
          <nav className='flex flex-col gap-4 '>
            <MailIcon />
            <LinkedinIcon />
            <MailIcon />
            <LinkedinIcon />
          </nav>
        </aside>
        <div className='absolute -z-20 flex h-screen w-full items-center justify-end overflow-hidden pr-32 text-[900px] font-bold leading-[0] text-[#ff4200] opacity-50'>
          V
        </div>
        <div id='mask' className='absolute -z-30 flex h-screen w-full items-center justify-end overflow-hidden pr-32 font-bold leading-[0]'>
          <h1 className='text-[900px]'>V</h1>
        </div>
        {/* VER TEMA HEIGHT DEL SECTION */}
        <section className='container mx-auto flex h-screen items-center justify-center'>
          <div>
            <h1 className='text-7xl font-bold uppercase tracking-[.35em]'>Vanzer</h1>
            <h2 className='my-4 text-xl uppercase'>Free creative psd template for you</h2>
            <span className='mb-4 mt-8 block h-1 w-1/3 bg-orange-600' />
            <div>
              <p className='text-sm font-bold uppercase'>Read More <span>▶️</span></p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default HomePage
