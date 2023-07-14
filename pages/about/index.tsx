import { Layout } from '@/components/Layout'
import { type NextPage } from 'next'

const AboutPage: NextPage = () => {
  return (
    <Layout dark>
      <div className='flex h-full items-center justify-center'>
        <h1 className='font-montserrat text-7xl font-bold uppercase tracking-[0.2em]'><span className='text-brand-orange'>Creative</span> Studio</h1>
      </div>
    </Layout>
  )
}

export default AboutPage
