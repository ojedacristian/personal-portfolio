import { Layout } from '@/components/Layout'
import { type NextPage } from 'next'

const PortfolioPage: NextPage = () => {
  return (
        <Layout>
            {/* BG */}
            <div className=" absolute -z-30 h-screen w-full bg-[url('/homebg.jpg')] bg-cover bg-no-repeat opacity-100 grayscale "/>
            <div className='absolute -z-20 h-screen w-full bg-brand-darkGray opacity-90'/>
            {/* BG END */}
            <div className='container mx-auto px-72 py-48'>
                <h1 className='inline-block border-b-4 border-brand-orange pb-4 font-montserrat text-5xl font-bold uppercase tracking-widest'>Portfolio</h1>
            </div>
        </Layout>
  )
}

export default PortfolioPage
