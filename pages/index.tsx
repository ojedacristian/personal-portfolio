import { type NextPage } from 'next'
import { ArrowRight } from '../components/icons'
import { Layout } from '@/components/Layout'
import Link from 'next/link'

const HomePage: NextPage = () => {
  return (
    <Layout bg="bg-[url('/homebg2.jpg')] bg-cover bg-no-repeat h-screen overflow-hidden" >
      {/* BACKGROUND */}
      <div className='mx-auto flex h-full px-8'>
      <div className='absolute left-2/3 top-1/2 z-10 flex h-full -translate-x-1/2 -translate-y-1/2 items-center overflow-hidden text-[400px] font-bold leading-[0] md:text-[600px]' id='mask'>
        <h1 className='font-montserrat'>js</h1>
      </div>
      <div className='absolute left-2/3 top-1/2 z-20 flex h-full -translate-x-1/2 -translate-y-1/2 items-center overflow-hidden text-[400px] font-bold leading-[0] text-brand-orange opacity-50 md:text-[600px]'>
        <h1 className='font-montserrat'>js</h1>
      </div>
      {/* BACKGROUND END */}
      <section
      className='container relative z-30 flex items-center justify-center'>
        <div className='md:mr-40 lg:mr-60'>
          <h1 className='font-montserrat text-4xl font-bold uppercase tracking-widest md:text-6xl md:tracking-widest'>
            Cristian Ojeda
            </h1>
          <h2 className='my-4 font-lato text-xl font-bold uppercase tracking-[0.15em] text-brand-lightGray md:text-brand-gray'>
            Frontend Developer / Multimedia Designer
          </h2>
          <span className='mb-7 mt-10 block h-[3px] w-2/5 bg-brand-orange' />
          <div className='flex items-center'>
            <p className='mr-2 font-montserrat text-sm font-bold uppercase'>
              Saber más
            </p>
            <Link href='/about'>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
      </div>

    </Layout>
  )
}
export default HomePage
