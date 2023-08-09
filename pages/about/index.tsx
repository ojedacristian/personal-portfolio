import { Layout } from '@/components/Layout'
import { type NextPage } from 'next'
import { motion } from 'framer-motion'
import { customVariant, customVariantItem } from '@/components/animations'

const AboutPage: NextPage = () => {
  return (
    <Layout dark>
      <div className='mx-auto flex h-full px-8'
      >
        <motion.section
         variants={customVariant}
         initial='hidden'
         animate='show'
          className='container flex min-h-screen flex-col items-center justify-around'>
          <motion.h1 variants={customVariantItem} className='text-center font-montserrat text-5xl font-bold uppercase tracking-widest md:text-6xl md:tracking-[0.2em] lg:text-7xl '>
            <span className='text-brand-orange'>Multimedia </span>Developer
          </motion.h1>
          <motion.h2 variants={customVariantItem} custom={1} className='w-5/6 px-2 text-center text-xl text-brand-darkGray [&>span]:text-brand-orange'>
            Mi nombre es <span>Cristian Ojeda</span> y soy un <span>profesional independiente</span> focalizado
            en la construcción de <span>experiencias multimedia</span>.
          </motion.h2>
          <div className='w-full px-4 lg:w-3/4 2xl:w-1/2'>
            <motion.span
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              transition: {
                ease: 'easeOut',
                duration: 1.4,
                delay: 0.6
              }
            }}
            className='mb-4 block h-1 w-64 origin-left bg-brand-lightGray md:w-96' />
            <motion.p variants={customVariantItem} custom={2} className='font-lato text-sm leading-7 text-[#999]'>
              Diseño y trabajo en el desarrollo de productos digitales y soluciones de comunicación gracias a un perfil multidisciplinario. Soy Licenciado en Tecnología Multimedia, lo que me llevo a gestionar proyectos en campos diversos como el diseño gráfico, web, interactivo, programación, análisis de datos y marketing digital.
            </motion.p>
          </div>
        </motion.section>
        {/* BACKGROUND */}
        <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 0.2 }}
        className='absolute left-0 top-36 -z-50 hidden overflow-hidden font-montserrat text-[500px] font-bold leading-none text-brand-lightGray opacity-30 sm:block sm:text-[600px] md:-left-0 md:-top-0 md:text-[800px]'>
        S
      </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, transition: { duration: 1, delay: 0.5 } }}
        className='absolute right-0 top-1/2 -z-50 overflow-hidden font-montserrat text-[200px] font-bold  leading-none tracking-widest text-brand-lightGray opacity-20'>
          Dev
        </motion.div>
      </div>
    </Layout>
  )
}

export default AboutPage
