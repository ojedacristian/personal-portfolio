import { Layout } from '@/components/Layout'
import { type NextPage } from 'next'
import { GithubIcon, ArrowRight } from '../../components/icons'

const PortfolioPage: NextPage = () => {
  return (
    <Layout>
      {/* BG */}
      {/* <div className=" absolute -z-30 h-screen w-full bg-[url('/homebg.jpg')] bg-cover bg-no-repeat opacity-100 grayscale " /> */}
      <div className="h-full w-full bg-[url('/square2.svg')] opacity-100">

      {/* <div className='absolute -left-44 -top-0 -z-40 h-screen overflow-hidden font-montserrat text-[1000px] font-bold  leading-none text-brand-gray opacity-30'>
          P
      </div>
      <div style={{
        writingMode: 'vertical-rl'
      }} className='absolute right-0 top-16 -z-40 overflow-hidden font-montserrat text-[200px] font-bold leading-tight tracking-widest text-brand-gray opacity-5'>
          Projects
      </div> */}
      {/* <div className='absolute -z-20 h-screen w-full bg-brand-darkGray opacity-90' /> */}
      {/* BG END */}
      <div className='container mx-auto px-72 py-48'>
        <h1 className='inline-block border-b-4 border-brand-orange pb-4 font-montserrat text-5xl font-bold uppercase tracking-widest'>Portfolio</h1>

        <div className='mx-auto'>
          <figure className="group relative m-6 overflow-hidden rounded-2xl bg-brand-orange text-white hover:cursor-pointer">
            <img src="1.jpg" alt="img01" className='min-h-full min-w-full group-hover:opacity-60' />
            <figcaption className='invisible absolute bottom-0 w-full -translate-x-1/2 scale-x-0 bg-white p-8 uppercase text-[#3c4a50] transition-all duration-300 before:pointer-events-none after:pointer-events-none group-hover:visible group-hover:translate-x-0 group-hover:scale-100
            '>
              <div className='absolute bottom-0 right-0 flex gap-4 p-4'>
                <div className='-translate-x-4 opacity-0 transition delay-[400ms] group-hover:translate-x-0 group-hover:opacity-100'>
                  <GithubIcon/>
                </div>
                <div className='-translate-x-4 opacity-0 transition delay-500 group-hover:translate-x-0 group-hover:opacity-100'>
                <ArrowRight/>
                </div>
              </div>
            {/* <a href="/func" className='absolute bottom-0 right-0 z-10 h-full p-4'>View more</a> */}
            </figcaption>
              <p className='invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-6 font-lato font-bold  opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>Descripcion del proyecto de Urkupiña</p>
              <h2 className='absolute bottom-0 left-0 p-4 text-base font-bold uppercase transition-all group-hover:text-brand-darkGray'>
                Urkupiña <span>Online</span>
              </h2>
          </figure>
          <figure className="group relative m-6 overflow-hidden rounded-2xl bg-brand-orange text-white hover:cursor-pointer">
            <img src="project3.png" alt="img01" className='min-h-full min-w-full group-hover:opacity-50' />
            <figcaption className='invisible absolute bottom-0 w-full -translate-x-1/2 scale-x-0 bg-white p-8 uppercase text-[#3c4a50] transition-all duration-300 before:pointer-events-none after:pointer-events-none group-hover:visible group-hover:translate-x-0 group-hover:scale-100
            '>
              <div className='absolute bottom-0 right-0 flex gap-4 p-4'>
                <div className='-translate-x-4 opacity-0 transition delay-[400ms] group-hover:translate-x-0 group-hover:opacity-100'>
                  <GithubIcon/>
                </div>
                <div className='-translate-x-4 opacity-0 transition delay-500 group-hover:translate-x-0 group-hover:opacity-100'>
                <ArrowRight/>
                </div>
              </div>
            {/* <a href="/func" className='absolute bottom-0 right-0 z-10 h-full p-4'>View more</a> */}
            </figcaption>
              <p className='invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-6 font-lato font-bold  opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>Descripcion del proyecto de Urkupiña</p>
              <h2 className='absolute bottom-0 left-0 p-4 text-base font-bold uppercase transition-all group-hover:text-brand-darkGray'>
                Urkupiña <span>Online</span>
              </h2>
          </figure>
        </div>

      </div>

      </div>
    </Layout>
  )
}

export default PortfolioPage
