import { Layout } from '@/components/Layout'
import { type NextPage } from 'next'
import { GithubIcon, ArrowRight } from '../../components/icons'
import { motion } from 'framer-motion'

const PortfolioPage: NextPage = () => {
  return (
    <Layout bg="bg-[url('/square2.svg')]">
      <motion.div
      className='mx-auto flex h-full sm:px-8'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // initial={{ y: '100%' }}
      // animate={{ y: '0%' }}
      // exit={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeOut'
      }}
      >
      <div className='container pt-20 sm:px-12 xl:px-16'>
        <h1 className='inline-block border-b-4 border-brand-orange pb-4 font-montserrat text-5xl font-bold uppercase tracking-widest'>Portfolio</h1>

        <div className='grid gap-6 px-4 lg:grid-cols-2 2xl:grid-cols-3'>
          <figure className="group relative mt-6 overflow-hidden rounded-2xl bg-brand-orange text-white hover:cursor-pointer">
            <img src="1.jpg" alt="img01" className='min-h-full min-w-full group-hover:opacity-60' />
            <figcaption className='invisible absolute bottom-0 w-full -translate-x-1/2 scale-x-0 bg-white p-8 uppercase text-[#3c4a50] transition-all duration-300 before:pointer-events-none after:pointer-events-none group-hover:visible group-hover:translate-x-0 group-hover:scale-100
            '>
              <div className='absolute bottom-0 right-0 flex gap-4 p-4'>
                <div className='-translate-x-4 opacity-0 transition delay-[400ms] group-hover:translate-x-0 group-hover:opacity-100'>
                  <GithubIcon />
                </div>
                <div className='-translate-x-4 opacity-0 transition delay-500 group-hover:translate-x-0 group-hover:opacity-100'>
                  <ArrowRight />
                </div>
              </div>
            </figcaption>
            <p className='invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-6 font-lato font-bold  opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>Descripcion del proyecto de Urkupiña</p>
            <h2 className='absolute bottom-0 left-0 p-4 text-base font-bold uppercase transition-all group-hover:text-brand-darkGray'>
              Urkupiña <span>Online</span>
            </h2>
          </figure>
          <figure className="group relative mt-6 overflow-hidden rounded-2xl bg-brand-orange text-white hover:cursor-pointer">
            <img src="project3.png" alt="img01" className='min-h-full min-w-full group-hover:opacity-50' />
            <figcaption className='invisible absolute bottom-0 w-full -translate-x-1/2 scale-x-0 bg-white p-8 uppercase text-[#3c4a50] transition-all duration-300 before:pointer-events-none after:pointer-events-none group-hover:visible group-hover:translate-x-0 group-hover:scale-100
            '>
              <div className='absolute bottom-0 right-0 flex gap-4 p-4'>
                <div className='-translate-x-4 opacity-0 transition delay-[400ms] group-hover:translate-x-0 group-hover:opacity-100'>
                  <GithubIcon />
                </div>
                <div className='-translate-x-4 opacity-0 transition delay-500 group-hover:translate-x-0 group-hover:opacity-100'>
                  <ArrowRight />
                </div>
              </div>
            </figcaption>
            <p className='invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-6 font-lato font-bold  opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>Descripcion del proyecto de Urkupiña</p>
            <h2 className='absolute bottom-0 left-0 p-4 text-base font-bold uppercase transition-all group-hover:text-brand-darkGray'>
              Urkupiña <span>Online</span>
            </h2>
          </figure>

          <figure className="group relative mt-6 overflow-hidden rounded-2xl bg-brand-orange text-white hover:cursor-pointer">
            <img src="1.jpg" alt="img01" className='min-h-full min-w-full group-hover:opacity-60' />
            <figcaption className='invisible absolute bottom-0 w-full -translate-x-1/2 scale-x-0 bg-white p-8 uppercase text-[#3c4a50] transition-all duration-300 before:pointer-events-none after:pointer-events-none group-hover:visible group-hover:translate-x-0 group-hover:scale-100
            '>
              <div className='absolute bottom-0 right-0 flex gap-4 p-4'>
                <div className='-translate-x-4 opacity-0 transition delay-[400ms] group-hover:translate-x-0 group-hover:opacity-100'>
                  <GithubIcon />
                </div>
                <div className='-translate-x-4 opacity-0 transition delay-500 group-hover:translate-x-0 group-hover:opacity-100'>
                  <ArrowRight />
                </div>
              </div>
            </figcaption>
            <p className='invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-6 font-lato font-bold  opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>Descripcion del proyecto de Urkupiña</p>
            <h2 className='absolute bottom-0 left-0 p-4 text-base font-bold uppercase transition-all group-hover:text-brand-darkGray'>
              Urkupiña <span>Online</span>
            </h2>
          </figure>
          <figure className="group relative mt-6 overflow-hidden rounded-2xl bg-brand-orange text-white hover:cursor-pointer">
            <img src="project3.png" alt="img01" className='min-h-full min-w-full group-hover:opacity-50' />
            <figcaption className='invisible absolute bottom-0 w-full -translate-x-1/2 scale-x-0 bg-white p-8 uppercase text-[#3c4a50] transition-all duration-300 before:pointer-events-none after:pointer-events-none group-hover:visible group-hover:translate-x-0 group-hover:scale-100
            '>
              <div className='absolute bottom-0 right-0 flex gap-4 p-4'>
                <div className='-translate-x-4 opacity-0 transition delay-[400ms] group-hover:translate-x-0 group-hover:opacity-100'>
                  <GithubIcon />
                </div>
                <div className='-translate-x-4 opacity-0 transition delay-500 group-hover:translate-x-0 group-hover:opacity-100'>
                  <ArrowRight />
                </div>
              </div>
            </figcaption>
            <p className='invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-6 font-lato font-bold  opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>Descripcion del proyecto de Urkupiña</p>
            <h2 className='absolute bottom-0 left-0 p-4 text-base font-bold uppercase transition-all group-hover:text-brand-darkGray'>
              Urkupiña <span>Online</span>
            </h2>
          </figure>
        </div>

      </div>
      </motion.div>

    </Layout>
  )
}

export default PortfolioPage
