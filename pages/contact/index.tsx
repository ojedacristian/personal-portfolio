import { Layout } from '@/components/Layout'
import { type NextPage } from 'next'
import { GithubIcon, LinkedinIcon, MailIcon } from '../../components/icons'
import { motion } from 'framer-motion'
import { customVariant, customVariantItem, customVariantItemX } from '@/components/animations'
import { type FormEvent } from 'react'
import { useForm } from '@/components/hooks/useForm'

const ContactPage: NextPage = () => {
  const [values, handleInputChange, reset] = useForm({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const { name, email, phone, message } = values
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    console.log(values)
    reset()

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(values)
    })
      .then((response) => {
        if (response.status === 200) {
          console.log('Enviado OK')
          reset()
        } else {
          console.log('Hubo un Error')
        }
      }).catch(err => { console.log(err) })
  }
  return (
        <Layout bg="bg-[#efefef] min-h-screen">
            <div className="absolute inset-y-0 left-0 min-h-screen w-full bg-[url('/homebg2.jpg')] bg-cover bg-no-repeat lg:w-1/2" />
            <div className='mx-auto flex h-full sm:px-8'>
                <motion.div variants={customVariant} initial='hidden' animate='show'
                    className='container flex flex-col pt-20 lg:pr-16'>
                    <div className='relative z-10 mx-auto flex text-right lg:mx-0 lg:pr-12'>
                        <motion.h1 variants={customVariantItem} className='inline-block flex-1 pb-4 font-montserrat text-5xl font-bold uppercase tracking-[0.2em]'>
                            Contact
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
                        <div className='flex-1'></div>
                    </div>
                    <div className="flex w-full flex-col justify-center gap-16 pt-8 md:flex-row lg:gap-40">
                        <motion.div variants={customVariantItemX} custom={[1.5, -20]} className='relative z-10 text-right lg:flex-1'>
                            <div className='flex items-end justify-around gap-14 fill-brand-gray pt-4 text-brand-gray md:flex-col md:pt-24'>
                                <div className='flex items-center gap-7 font-lato'>
                                    <div className='hidden md:block'>
                                        <span className='block font-montserrat text-lg font-bold uppercase'>E-mail</span>
                                        <a href='mailto:cristianojeda.maimo@gmail.com' className='text-sm'>cristianojeda.maimo@gmail.com </a>
                                    </div>
                                    <a href='mailto:cristianojeda.maimo@gmail.com' className='transition-all hover:scale-150 hover:text-brand-orange'>
                                        <MailIcon />
                                    </a>
                                </div>
                                <div className='flex items-center gap-7 font-lato'>
                                    <div className='hidden md:block'>
                                        <span className='block font-montserrat text-lg font-bold uppercase'>Github</span>
                                        <a href='https://github.com/ojedacristian' target='_blank' className='text-sm' rel="noreferrer">github.com/ojedacristian </a>
                                    </div>
                                    <a href='https://github.com/ojedacristian' target='_blank' className='transition-all hover:scale-150 hover:fill-brand-orange' rel="noreferrer">
                                        <GithubIcon />
                                    </a>
                                </div>
                                <div className='flex items-center gap-7 font-lato'>
                                    <div className='hidden md:block'>
                                        <span className='block font-montserrat text-lg font-bold uppercase'>Linkedin</span>
                                        <a href='https://www.linkedin.com/in/ojedacristian/' target='_blank' className='text-sm' rel="noreferrer">linkedin.com/in/ojedacristian </a>
                                    </div>
                                    <a href='https://www.linkedin.com/in/ojedacristian/' target='_blank' className='text-sm transition-all hover:scale-150 hover:fill-brand-orange' rel="noreferrer">
                                        <LinkedinIcon />
                                    </a>
                                </div>
                            </div>
                            {/* <div className='pt-8 text-center'>cristianojeda.maimo@gmail.com</div> */}
                        </motion.div>
                        <motion.div variants={customVariantItemX} custom={[1.5, 20]} className='relative z-10 flex-1 text-black'>
                            <form
                            onSubmit={handleSubmit}
                            className='flex flex-col gap-8 pb-4 font-lato text-brand-lightGray lg:text-brand-darkGray
                        [&>div>input]:font-montserrat [&>div>input]:text-brand-darkGray
                         [&>div>textarea]:font-montserrat [&>div>textarea]:text-brand-darkGray'>
                                <div>
                                    <label htmlFor="name" className='block font-bold uppercase'>Nombre</label>
                                    <input type="text" name='name' value={name} onChange={handleInputChange} placeholder='Tu nombre' className='mt-1 block w-full rounded-md border border-brand-gray px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-brand-orange  focus:outline-none focus:ring-1 focus:ring-brand-orange lg:w-full' />
                                </div>
                                <div>
                                    <label htmlFor="email" className='block font-bold uppercase'>Email</label>
                                    <input type="text" onChange={handleInputChange} value={email} name='email' placeholder='email@gmail.com' className='mt-1 block w-full rounded-md border border-brand-gray px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-brand-orange  focus:outline-none focus:ring-1 focus:ring-brand-orange lg:w-full' />
                                </div>
                                <div>
                                    <label htmlFor="phone" className='block font-bold uppercase'>Telefono</label>
                                    <input type="text" onChange={handleInputChange} value={phone} name='phone' placeholder='Celular' className='mt-1 block w-full rounded-md border border-brand-gray px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-brand-orange  focus:outline-none focus:ring-1 focus:ring-brand-orange lg:w-full' />
                                </div>
                                <div>
                                    <label htmlFor="message" className='block font-bold uppercase'>Mensaje</label>
                                    <textarea placeholder='Dejame tu mensaje' value={message} onChange={handleInputChange} name='message' className='mt-1 block h-28 w-full resize-none rounded-md border border-brand-gray px-3 py-2 text-sm shadow-sm placeholder:text-slate-400  focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange lg:w-full' />
                                </div>
                                <button className='w-1/2 bg-brand-orange p-3 text-sm font-bold uppercase text-white'>Enviar</button>
                            </form>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </Layout>
  )
}

export default ContactPage
