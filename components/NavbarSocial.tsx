import { MailIcon, GithubIcon, LinkedinIcon, MenuBarIcon } from './icons'
import MobileMenu from './MobileMenu'

const NavbarSocial: React.FC = () => {
  return (
    <div className='flex flex-col items-center pt-10'>
        <MobileMenu />
        <nav className='relative z-30 hidden h-screen w-20 flex-col items-center justify-center gap-10 lg:flex'>
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
    </div>
  )
}

export default NavbarSocial
