import { type NextPage } from 'next'
import { ArrowRight } from '../components/icons'
import { Layout } from '@/components/Layout'

const HomePage: NextPage = () => {
  return (
    <Layout>
      {/* BACKGROUND */}
      <div className='absolute -z-40 h-screen w-full bg-[#333] opacity-90' />
      <div className="absolute -z-50 h-screen w-full bg-[url('/homebg.jpg')] bg-cover bg-no-repeat grayscale" />
      <div className='absolute -z-30 flex h-screen w-full items-center justify-center overflow-hidden pl-96 pr-32 font-bold leading-[0]' id='mask'>
        <h1 className='font-montserrat text-[900px]'>V</h1>
      </div>
      <div className='absolute -z-20 flex h-screen w-full items-center justify-center overflow-hidden pl-96 pr-32 text-[900px] font-bold leading-[0] text-brand-orange opacity-50'>
        <h1 className='font-montserrat'>V</h1>
      </div>
      {/* BACKGROUND END */}
      <section className='container mx-auto flex h-screen items-center justify-center'>
        <div className='mr-60'>
          <h1 className='font-montserrat text-7xl font-bold uppercase tracking-[.35em]'>Vanzer</h1>
          <h2 className='my-4 font-lato text-xl font-bold uppercase tracking-[0.15em] text-brand-gray'>Free creative psd template for you</h2>
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
