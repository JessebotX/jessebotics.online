import { Inter, Roboto_Mono, Major_Mono_Display, Victor_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'] })
const majorMono = Major_Mono_Display({ subsets: ['latin'], weight: "400" })
const victorMono = Victor_Mono({ subsets: ['latin'], style: "italic" })

export default function Home() {
    return (
        <main className={`${robotoMono.className} max-w-6xl mx-auto py-48 mt-5`}>
            <div className={`${robotoMono.className}`}>
                <div className='grid grid-cols-1 md:grid-cols-5'>
                    <div className='p-14 transition-all ease-in-out duration-100 hidden md:block
                        border-dashed hover:border-solid border-x-2 border-b-2'>
                    </div>
                    <div className='p-14 transition-all ease-in-out duration-100 hidden md:block
                        border-dashed hover:border-solid border-t-2'>
                    </div>
                    <div className='p-14 transition-all ease-in-out duration-100 hidden md:block
                        border-dashed hover:border-solid border-x-2'>
                    </div>
                    <div className='p-14 transition-all ease-in-out duration-100 hidden md:block
                        border-dashed hover:border-solid border-t-2'>
                    </div>
                    <div className='p-14 transition-all ease-in-out duration-100 hidden md:block
                        border-dashed hover:border-solid border-b-2 border-x-2'>
                    </div>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-3`}>
                    <div className='p-11 transition-all ease-in-out duration-100 hidden md:block
                        border-x-2 border-dashed hover:border-solid'>
                    </div>
                    <h1 className={`${majorMono.className}
                        p-11 border-y-2 text-center text-4xl hover:bg-slate-900 hover:text-white transition-all`}>
                        JESSE huAnG
                    </h1>
                    <div className='p-11 transition-all ease-in-out hidden md:block
                        duration-100 border-x-2 border-dashed hover:border-solid'>
                    </div>
                </div>
                <div className='p-10 px-14 border-x-2 border-b-2 border-dashed hover:border-solid text-center'>
                    <p className={`${majorMono.className} mb-3 font-bold text-lg`}>👋 hello!</p>
                    <p>I'm a computer science student interested in developing a wide range of software, whether it involves games, web, desktop or mobile applications.</p>
                </div>
            </div>

            <section className='mt-8'>
                <h2 className={`${majorMono.className} text-3xl`}>pRojects</h2>
                <div className='grid grid-cols-3 gap-6'>
                    <a href="https://github.com/JessebotX/bookgen"
                        class='block p-7 rounded-md border-2 transition-all
                            hover:bg-slate-800 child:hover:text-slate-100 hover:scale-110'>
                        <h3 className='font-bold text-lg text-blue-600 border-dotted border-b-2'>
                            Bookgen
                        </h3>
                        <em className={`${victorMono.className} text-xs my-3 ml-6 block`}>Go, HTML, CSS, JavaScript, Sass</em>
                        <p className='text-md'>
                            Turn a collection of Markdown-based books into a static website with RSS feeds and EPUB download.
                        </p>
                    </a>
                    <a href="https://github.com/JessebotX/bookgen"
                        class='block p-7 rounded-md border-2 transition-all
                            hover:bg-slate-800 child:hover:text-slate-100 hover:scale-110'>
                        <h3 className='font-bold text-lg text-blue-600 border-dotted border-b-2'>
                            Bookgen
                        </h3>
                        <em className={`${victorMono.className} text-xs my-3 ml-6 block`}>Go, HTML, CSS, JavaScript, Sass</em>
                        <p className='text-md'>
                            Turn a collection of Markdown-based books into a static website with RSS feeds and EPUB download.
                        </p>
                    </a>
                </div>
            </section>
        </main>
    )
}
