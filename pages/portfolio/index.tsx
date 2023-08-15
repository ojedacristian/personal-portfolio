import { Layout } from '@/components/Layout'
import { type NextPage } from 'next'
import { motion } from 'framer-motion'
import { PortfolioCard, type PortfolioCardProps } from '../../components/PortfolioCard'
import { container, customVariant, customVariantItem, item } from '@/components/animations'

const projects: PortfolioCardProps[] = [
  {
    img: 'uxdesigner.jpg',
    desc: 'UX/UI Designer Portfolio. Sitio web de código abierto responsive, de fácil personalización.',
    github: 'https://github.com/ojedacristian/designer-free-portfolio',
    live: 'https://free-uxdesigner-portfolio.netlify.app/',
    title: 'UX/UI Designer site',
    stack: ['NextJS', 'Tailwind', 'TypeScript', 'Framer Motion']
  },
  {
    img: 'dezign.jpg',
    desc: 'Portfolio open source construido para la comunidad. Diseño de una página, responsive, minimalista.',
    github: 'https://github.com/ojedacristian/next-tailwind-portfolio',
    live: 'https://free-next-portfolio.netlify.app/',
    title: 'Portfolio Open Source',
    stack: ['NextJS', 'Tailwind', 'TypeScript', 'Framer Motion']
  },
  {
    img: 'urkupinaonline.jpg',
    desc: 'Plataforma web para los comerciantes de Urkupiña, el paseo de compras más grande de la Feria La Salada.',
    github: '',
    live: 'https://urkupinaonline.com.ar',
    title: 'Urkupiña online',
    stack: ['ReactJS', 'MongoDB', 'Amazon S3', 'Amazon SES', 'AWS Elastic Beanstalk', 'Framer Motion', 'MaterializeCSS']
  },
  {
    img: 'mapacdi.jpg',
    desc: 'Articulación con el Ministerio de Desarrollo Social y el Ministerio de Modernización para el desarrollo de un Mapa Interactivo con los diferentes Centros dependientes del Ministerio.',
    github: 'https://github.com/ojedacristian/leaflet-cdis-search',
    live: '',
    title: 'Mapa Interactivo de CDIs',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Leaflet']
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
        className='grid gap-6 px-4 pb-10 xl:grid-cols-2'>
          {
            projects.map(({ desc, img, github, live, title, stack }) => (
              <motion.div key={ title } variants={item}>
                <PortfolioCard
                img={ img }
                title={ title }
                desc={ desc }
                github={ github }
                live={ live }
                stack={ stack }
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
