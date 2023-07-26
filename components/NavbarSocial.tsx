import { MailIcon, GithubIcon, LinkedinIcon } from './icons'

const NavbarSocial: React.FC = () => {
  return (
        <nav className='absolute right-8 hidden h-screen flex-col items-center justify-center gap-10 lg:flex'>
            <a href='mailto:cristianojeda.maimo@gmail.com' className='text-brand-gray transition ease-in-out hover:scale-150 hover:text-brand-orange'>
                <MailIcon />
            </a>
            <a href='github.com' target='_blank' className='fill-brand-gray transition ease-in-out hover:scale-150 hover:fill-brand-orange'>
                <GithubIcon />
            </a>
            {/* <WhatsappIcon /> */}
            <a href='linkedin.com' className='fill-brand-gray text-brand-gray transition ease-in-out hover:scale-150 hover:fill-brand-orange'>
                <LinkedinIcon />
            </a>
        </nav>
  )
}

export default NavbarSocial
