import { Layout } from '@/components/Layout'
import { type NextPage } from 'next'
import { motion } from 'framer-motion'
import { PortfolioCard, type PortfolioCardProps } from '../../components/PortfolioCard'
import { container, customVariant, customVariantItem, item } from '@/components/animations'

const projects: PortfolioCardProps[] = [
  {
    img: '1.jpg',
    desc: 'Descripcion algo larga Descripcion algo larga Descripcion algo larga Descripcion algo larga Descripcion algo larga ',
    github: 'https://github.com',
    live: 'https://urkupinaonline.com.ar',
    title: 'Urkupiña online'
  },
  {
    img: '1.jpg',
    desc: 'Descripcion',
    github: 'github.com',
    live: 'google.com',
    title: 'Urkupiña online'
  },
  {
    img: '1.jpg',
    desc: 'Descripcion',
    github: 'github.com',
    live: 'google.com',
    title: 'Urkupiña online'
  },
  {
    img: '1.jpg',
    desc: 'Descripcion',
    github: 'github.com',
    live: 'google.com',
    title: 'Urkupiña online'
  }
]

const PortfolioPage: NextPage = () => {
  return (
    <Layout bg="bg-[url('/square2.svg')]">
      <div className='mx-auto flex h-full'>
      <motion.div variants={customVariant} initial='hidden' animate='show' className='container pt-20'>
        <motion.h1 variants={customVariantItem} className='inline-block font-montserrat text-5xl font-bold uppercase tracking-widest'>
          Portfolio
        <motion.span
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
                transition: {
                  ease: 'easeOut',
                  duration: 1,
                  delay: 0.3
                }
              }}
              className='mb-7 mt-3 block h-1 w-full origin-left bg-brand-orange' />
          </motion.h1>

        <motion.div
        variants={container}
        className='grid gap-6 px-4 xl:grid-cols-2'>

          {
            projects.map(({ desc, img, github, live, title }) => (
              <motion.div key={ title } variants={item}>
                <PortfolioCard
                img={ img }
                title={ title }
                desc={ desc }
                github={ github }
                live={ live }
                />
              </motion.div>
            ))
          }

        </motion.div>

      </motion.div>
      </div>

    </Layout>
  )
}

export default PortfolioPage
