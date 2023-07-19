import { Layout } from '@/components/Layout'
import { type NextPage } from 'next'
import Image from 'next/image'
import { GithubIcon, ArrowRight } from '../../components/icons'

const PortfolioPage: NextPage = () => {
  return (
    <Layout>
      {/* BG */}
      <div className=" absolute -z-30 h-screen w-full bg-[url('/homebg.jpg')] bg-cover bg-no-repeat opacity-100 grayscale " />
      <div className='absolute -z-20 h-screen w-full bg-brand-darkGray opacity-90' />
      {/* BG END */}
      <div className='container mx-auto px-72 py-48'>
        <h1 className='inline-block border-b-4 border-brand-orange pb-4 font-montserrat text-5xl font-bold uppercase tracking-widest'>Portfolio</h1>

        <div className='mx-auto'>
          <figure className="group relative m-6 overflow-hidden bg-[#3085a3] text-white hover:cursor-pointer">
            <img src="1.jpg" alt="img01" className='min-h-full min-w-full group-hover:opacity-80' />
            <figcaption className='invisible absolute bottom-0 w-full -translate-x-1/2 scale-x-0 bg-white p-8 uppercase text-[#3c4a50] transition-all duration-300 before:pointer-events-none after:pointer-events-none group-hover:visible group-hover:translate-x-0 group-hover:scale-100
            '>
              <div className='absolute bottom-0 right-0 flex gap-4 p-4'>
                <div className='-translate-x-4 opacity-0 transition delay-500 group-hover:translate-x-0 group-hover:opacity-100'>
                  <GithubIcon/>
                </div>
                <div className='-translate-x-4 opacity-0 transition delay-[600ms] group-hover:translate-x-0 group-hover:opacity-100'>
                <ArrowRight/>
                </div>
              </div>
            {/* <a href="/func" className='absolute bottom-0 right-0 z-10 h-full p-4'>View more</a> */}
            </figcaption>
              <p className='invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-6 font-lato font-bold  opacity-0 transition duration-500 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>Descripcion del proyecto de Urkupiña</p>
              <h2 className='absolute bottom-0 left-0 p-4 font-bold uppercase transition-all group-hover:text-brand-darkGray'>
                Urkupiña <span>Online</span>
              </h2>
          </figure>
        </div>

      </div>
    </Layout>
  )
}

export default PortfolioPage
