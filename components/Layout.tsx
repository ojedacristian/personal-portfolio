import Head from 'next/head'

interface Props {
  title?: string
  children: React.ReactNode
}

// const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: React.FC<Props> = ({ children, title = 'Cristian Ojeda - Portfolio' }: Props) => {
  return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="author" content="Cristian Ojeda" />
                <meta name="description" content={`${title}`} />
                <meta name="keywords" content={`${title}, developer, frontend, desarrollador, web design`} />

                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                {/* <meta property="og:image" content={`${origin}/img/banner.png`} /> */}

            </Head>

            <div>
                {children}
            </div>

        </>
  )
}
