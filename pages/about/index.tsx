import { Layout } from '@/components/Layout'
import { type NextPage } from 'next'

const AboutPage: NextPage = () => {
  return (
    <Layout dark>
      <div className='absolute -left-44 -top-0 -z-50 h-screen overflow-hidden font-montserrat text-[1000px] font-bold  leading-none text-brand-lightGray opacity-30'>
          A
      </div>
      <div className='absolute right-0 top-16 -z-50 h-1/2 overflow-hidden font-montserrat text-[250px] font-bold  leading-none tracking-widest text-brand-lightGray opacity-20'>
          AB
      </div>
      <div className='flex h-screen flex-col items-center justify-around'>
        <div></div>
        <h1 className='font-montserrat text-7xl font-bold uppercase tracking-[0.2em]'><span className='text-brand-orange'>Creative</span> Studio</h1>
        <div className='mx-auto w-1/2'>
          <span className='mb-14 block h-1 w-96 bg-brand-lightGray' />
          <p className='font-lato text-sm leading-7 text-[#999]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
        </div>
        <div></div>
      </div>
    </Layout>
  )
}

export default AboutPage
