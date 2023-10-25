import { type NextPage } from 'next'
import { ArrowRight } from '../components/icons'
import { Layout } from '@/components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { customVariant, customVariantItem } from '@/components/animations'

const HomePage: NextPage = () => {
  return (
    <Layout bg="bg-[url('/homebg2.jpg')] bg-cover bg-no-repeat h-screen overflow-hidden" >
      {/* BACKGROUND */}
      <div className='mx-auto flex h-full px-8'>
        {/* BACKGROUND END */}
        <motion.section
          variants={customVariant}
          initial='hidden'
          animate='show'
          className='container relative z-30 flex items-center justify-center'>
          <div className='md:mr-40 lg:mr-60'>
            <motion.h1
              variants={customVariantItem}
              className='font-montserrat text-4xl font-bold uppercase tracking-widest md:text-6xl md:tracking-widest'>
              Cristian Ojeda
            </motion.h1>
            <motion.h2
              variants={customVariantItem}
              custom={1}
              className='my-4 font-lato text-xl font-bold uppercase tracking-[0.15em] text-brand-lightGray md:text-brand-gray'>
              Frontend Developer / <span className='text-white'>Multimedia Designer</span>
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
              variants={customVariantItem}
              custom={2}
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
        </motion.section>
      </div>

    </Layout>
  )
}
export default HomePage
