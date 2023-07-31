import { type NextPage } from 'next'
import { ArrowRight } from '../components/icons'
import { Layout } from '@/components/Layout'

const HomePage: NextPage = () => {
  return (
    <Layout bg="bg-[url('/homebg2.jpg')] bg-cover bg-no-repeat h-screen overflow-hidden" >
      {/* BACKGROUND */}
      <div className='absolute left-2/3 top-1/2 z-10 flex h-full -translate-x-1/2 -translate-y-1/2 items-center overflow-hidden font-bold leading-[0]' id='mask'>
        <h1 className='font-montserrat text-[900px]'>V</h1>
      </div>
      <div className='absolute left-2/3 top-1/2 z-20 flex h-full -translate-x-1/2 -translate-y-1/2 items-center overflow-hidden text-[900px] font-bold leading-[0] text-brand-orange opacity-50'>
        <h1 className='font-montserrat'>V</h1>
      </div>
      {/* BACKGROUND END */}
      <section className='container relative z-30 flex items-center justify-center'>
        <div className='md:mr-40 lg:mr-60'>
          <h1 className='font-montserrat text-6xl font-bold uppercase tracking-widest md:text-7xl md:tracking-[.35em]'>Vanzer</h1>
          <h2 className='my-4 font-lato text-xl font-bold uppercase tracking-[0.15em] text-brand-lightGray md:text-brand-gray'>Free creative psd template for you</h2>
          <span className='mb-7 mt-10 block h-[3px] w-2/5 bg-brand-orange' />
          <div className='flex items-center'>
            <p className='mr-2 font-montserrat text-sm font-bold uppercase'>
              Read More
            </p>
            <ArrowRight />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default HomePage
