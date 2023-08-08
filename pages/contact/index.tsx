import { Layout } from '@/components/Layout'
import { type NextPage } from 'next'
import { GithubIcon, LinkedinIcon, MailIcon } from '../../components/icons'

const ContactPage: NextPage = () => {
  return (
        <Layout bg="bg-[#efefef] min-h-screen">
            <div className="absolute inset-y-0 left-0 min-h-screen w-full bg-[url('/homebg2.jpg')] bg-cover bg-no-repeat lg:w-1/2" />
            <div className='mx-auto flex h-full sm:px-8'>
            <div className='container flex flex-col pt-20 lg:pr-16'>
                <div className='relative z-10 mx-auto flex text-right lg:mx-0 lg:pr-12'>
                    <h1 className='inline-block flex-1 border-b-4 border-brand-orange pb-4 font-montserrat text-5xl font-bold uppercase tracking-[0.2em]'>
                        Contact
                    </h1>
                    <div className='flex-1'></div>
                </div>
                <div className="flex w-full flex-col justify-center gap-16 pt-8 md:flex-row lg:gap-40">
                    <div className='relative z-10 text-right lg:flex-1'>
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
                    </div>
                    <div className='relative z-10 flex-1 text-black'>
                        <form className='flex flex-col gap-8 pb-4 font-lato text-brand-lightGray lg:text-brand-darkGray
                        [&>div>input]:font-montserrat [&>div>input]:text-brand-darkGray
                         [&>div>textarea]:font-montserrat [&>div>textarea]:text-brand-darkGray'>
                            <div>
                                <label htmlFor="name" className='block font-bold uppercase'>Name</label>
                                <input type="text" placeholder='Your name' className='mt-1 block w-full rounded-md border border-brand-gray px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-brand-orange  focus:outline-none focus:ring-1 focus:ring-brand-orange lg:w-full' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block font-bold uppercase'>Email</label>
                                <input type="text" placeholder='email@gmail.com' className='mt-1 block w-full rounded-md border border-brand-gray px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-brand-orange  focus:outline-none focus:ring-1 focus:ring-brand-orange lg:w-full' />
                            </div>
                            <div>
                                <label htmlFor="phone" className='block font-bold uppercase'>phone</label>
                                <input type="text" placeholder='Your name' className='mt-1 block w-full rounded-md border border-brand-gray px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-brand-orange  focus:outline-none focus:ring-1 focus:ring-brand-orange lg:w-full' />
                            </div>
                            <div>
                                <label htmlFor="message" className='block font-bold uppercase'>Message</label>
                                <textarea placeholder='Your message' className='mt-1 block h-28 w-full resize-none rounded-md border border-brand-gray px-3 py-2 text-sm shadow-sm placeholder:text-slate-400  focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange lg:w-full' />
                            </div>
                            <button className='w-1/2 bg-brand-orange p-3 text-sm font-bold uppercase text-white'>Enviar</button>
                        </form>
                    </div>
                </div>

            </div>
            </div>
        </Layout>
  )
}

export default ContactPage
