import { ArrowRight, GithubIcon } from './icons'

export interface PortfolioCardProps {
  img: string
  desc: string
  title: string
  github: string
  live: string
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, desc, github, img, live }) => {
  return (
        <figure className="group relative mt-6 overflow-hidden rounded-2xl bg-brand-orange text-white hover:cursor-pointer">
            <img src={ img } alt={ title } className='min-w-full group-hover:opacity-25' />
            <figcaption className='invisible absolute bottom-0 w-full -translate-x-1/2 scale-x-0 bg-white p-8 uppercase text-[#3c4a50] transition-all duration-300 before:pointer-events-none after:pointer-events-none group-hover:visible group-hover:translate-x-0 group-hover:scale-100
            '>
                <div className='absolute bottom-0 right-0 flex gap-4 p-4'>
                    <div className='-translate-x-4 opacity-0 transition delay-[400ms] group-hover:translate-x-0 group-hover:opacity-100'>
                        <a href={github} target='_blank' rel="noreferrer">
                            <GithubIcon />
                        </a>
                    </div>
                    <div className='-translate-x-4 opacity-0 transition delay-500 group-hover:translate-x-0 group-hover:opacity-100'>
                    <a href={live} target='_blank' rel="noreferrer">
                        <ArrowRight />
                        </a>
                    </div>
                </div>
            </figcaption>
            <p className='invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-6 font-lato font-bold  opacity-0 drop-shadow-md transition-all duration-500 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
                { desc }
                </p>
            <h2 className='absolute bottom-0 left-0 p-4 text-base font-bold uppercase transition-all group-hover:text-brand-darkGray'>
                {title}
            </h2>
        </figure>
  )
}
