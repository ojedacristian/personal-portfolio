import { Layout } from '@/components/Layout'
import { type NextPage } from 'next'

const AboutPage: NextPage = () => {
  return (
    <Layout dark>
      <div className='mx-auto flex h-full px-8'
      >
        <section
          className='container flex min-h-screen flex-col items-center justify-around'>
          <h1 className='text-center font-montserrat text-5xl font-bold uppercase tracking-widest sm:text-6xl md:text-7xl md:tracking-[0.2em]'>
            <span className='text-brand-orange'>Multimedia </span>Developer
          </h1>
          <h2 className='w-5/6 text-center text-xl text-brand-darkGray [&>span]:text-brand-orange'>
            Mi nombre es <span>Cristian Ojeda</span> y soy un <span>profesional independiente</span> focalizado
            en la construcción de <span>experiencias multimedia</span>.
          </h2>
          <div className='w-full px-4 md:w-3/4 xl:w-1/2'>
            <span className='mb-4 block h-1 w-64 bg-brand-lightGray md:w-96' />
            <p className='font-lato text-sm leading-7 text-[#999]'>
              Diseño y trabajo en el desarrollo de productos digitales y soluciones de comunicación gracias a un perfil multidisciplinario. Soy Licenciado en Tecnología Multimedia, lo que me llevo a gestionar proyectos en campos diversos como el diseño gráfico, web, interactivo, programación, análisis de datos y marketing digital.
            </p>
          </div>
        </section>
        {/* BACKGROUND */}
        <div className='absolute left-0 top-36 -z-50 h-screen overflow-hidden font-montserrat text-[500px] font-bold leading-none text-brand-lightGray opacity-30 sm:text-[600px] md:-left-44 md:-top-0 md:text-[1000px]'>
        S
      </div>
        <div className='absolute right-0 top-1/2 -z-50 overflow-hidden font-montserrat text-[200px] font-bold  leading-none tracking-widest text-brand-lightGray opacity-20'>
          Dev
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
