import { type NextPage } from 'next'
import { ArrowRight } from '../components/icons'
import { Layout } from '@/components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'

const HomePage: NextPage = () => {
  return (
    <Layout bg="bg-[url('/homebg2.jpg')] bg-cover bg-no-repeat h-screen overflow-hidden" >
      {/* BACKGROUND */}
      <div className='mx-auto flex h-full px-8'>
        <div className='absolute left-2/3 top-1/2 z-10 flex h-full -translate-x-1/2 -translate-y-1/2 items-center overflow-hidden text-[400px] font-bold leading-[0] md:text-[600px]' id='mask'>
          <motion.h1
            initial={{
              opacity: 0, x: -250
            }} animate={{
              opacity: 1, x: 0, transition: { duration: 1, delay: 0.8 }
            }}
            className='font-montserrat'>js</motion.h1>
        </div>
        <div className='absolute left-2/3 top-1/2 z-20 flex h-full -translate-x-1/2 -translate-y-1/2 items-center overflow-hidden text-[400px] font-bold leading-[0] text-brand-orange opacity-50 md:text-[600px]'>
          <motion.h1
            initial={{
              opacity: 0
            }} animate={{ opacity: 1, transition: { duration: 1, delay: 1.5 } }}
            className='font-montserrat'>js</motion.h1>
        </div>
        {/* BACKGROUND END */}
        <section
          className='container relative z-30 flex items-center justify-center'>
          <div className='md:mr-40 lg:mr-60'>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8 }
              }}
              className='font-montserrat text-4xl font-bold uppercase tracking-widest md:text-6xl md:tracking-widest'>
              Cristian Ojeda
            </motion.h1>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.8
                }
              }}
              className='my-4 font-lato text-xl font-bold uppercase tracking-[0.15em] text-brand-lightGray md:text-brand-gray'>
              Frontend Developer / Multimedia Designer
            </motion.h2>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
                transition: {
                  ease: 'easeOut',
                  duration: 1.4
                }
              }}
              className='mb-7 mt-10 block h-[3px] w-2/5 origin-left bg-brand-orange' />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 0.8
                }
              }}
              className='flex items-center'>
              <Link href='/about' className='flex items-center'>
                <p className='mr-2 font-montserrat text-sm font-bold uppercase'>
                  Saber más
                </p>
                <div className='animate-bounce'>
                  <ArrowRight />
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

    </Layout>
  )
}
export default HomePage
