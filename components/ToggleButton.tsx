import { motion } from 'framer-motion'

const Path = (props: any): any => (
    <motion.path
        strokeWidth="3"
        strokeLinecap="round"
        {...props}
    />
)

interface Props {
  toggle: () => void
}

export const ToggleButton: React.FC<Props> = ({ toggle }) => (
    <button onClick={toggle} className='fixed right-0 top-0 z-50 m-4 flex h-10 w-10 items-center justify-center stroke-brand-lightGray 2xl:hidden'>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                  closed: { d: 'M 2 2.5 L 20 2.5' },
                  open: { d: 'M 3 16.5 L 17 2.5' }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                  closed: { d: 'M 2 16.346 L 20 16.346' },
                  open: { d: 'M 3 2.5 L 17 16.346' }
                }}
            />
        </svg>
    </button>
)
