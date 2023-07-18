import { Layout } from '@/components/Layout'
import { type NextPage } from 'next'
import { GithubIcon, LinkedinIcon, MailIcon } from '../../components/icons'

const ContactPage: NextPage = () => {
  return (
        <Layout>
            <div className="absolute -z-50 h-screen w-1/2 bg-[url('/homebg.jpg')] bg-cover bg-no-repeat grayscale" />
            <div className='absolute -z-40 h-screen w-1/2 bg-brand-darkGray opacity-90 ' />
            <div className='absolute right-0 -z-40 h-screen w-1/2 bg-[#efefef] opacity-90 ' />

            <div className='h-screen'>

                <div className='container mx-auto flex justify-center gap-20 p-48'>
                    <div className='w-1/2 text-right'>
                        <h1 className='inline-block border-b-4 border-brand-orange pb-4 font-montserrat text-5xl font-bold uppercase tracking-[0.2em]'>
                            Contact
                        </h1>
                        <div className='flex flex-col items-end gap-14 pt-24 text-brand-gray'>
                            <div className='flex items-center gap-7 font-lato'>
                                <div>
                                    <span className='block font-montserrat text-lg font-bold uppercase'>E-mail</span>
                                    <a href='mailto:cristianojeda.maimo@gmail.com' className='text-sm'>cristianojeda.maimo@gmail.com </a>
                                </div>
                                <MailIcon />
                            </div>
                            <div className='flex items-center gap-7 font-lato'>
                                <div>
                                    <span className='block font-montserrat text-lg font-bold uppercase'>Github</span>
                                    <a href='https://github.com/ojedacristian' target='_blank' className='text-sm' rel="noreferrer">github.com/ojedacristian </a>
                                </div>
                                <GithubIcon />
                            </div>
                            <div className='flex items-center gap-7 font-lato'>
                                <div>
                                    <span className='block font-montserrat text-lg font-bold uppercase'>Linkedin</span>
                                    <a href='https://www.linkedin.com/in/ojedacristian/' target='_blank' className='text-sm' rel="noreferrer">linkedin.com/in/ojedacristian </a>
                                </div>
                                <LinkedinIcon />
                            </div>

                        </div>
                    </div>
                    <div className='w-1/2 text-black'>
                        <form className='flex flex-col gap-8 px-12 font-lato text-brand-darkGray [&>div>input]:font-montserrat [&>div>textarea]:font-montserrat'>
                            <div>
                                <label htmlFor="name" className='block font-bold uppercase'>Name</label>
                                <input type="text" placeholder='Your name' className='mt-1 block w-full rounded-md border border-brand-gray px-3 py-2 text-sm shadow-sm placeholder:text-slate-400  focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block font-bold uppercase'>Email</label>
                                <input type="text" placeholder='email@gmail.com' className='mt-1 block w-full rounded-md border border-brand-gray px-3 py-2 text-sm shadow-sm placeholder:text-slate-400  focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange' />
                            </div>
                            <div>
                                <label htmlFor="phone" className='block font-bold uppercase'>phone</label>
                                <input type="text" placeholder='Your name' className='mt-1 block w-full rounded-md border border-brand-gray px-3 py-2 text-sm shadow-sm placeholder:text-slate-400  focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange' />
                            </div>
                            <div>
                                <label htmlFor="name" className='block font-bold uppercase'>Message</label>
                                <textarea placeholder='Your name' className='mt-1 block h-28 w-full resize-none rounded-md border border-brand-gray px-3 py-2 text-sm shadow-sm  placeholder:text-slate-400 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange' />
                            </div>
                            <button className='w-1/2 bg-brand-orange p-3 text-sm font-bold uppercase text-white'>Enviar</button>
                        </form>
                    </div>

                </div>
            </div>
        </Layout>
  )
}

export default ContactPage
