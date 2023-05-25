import Navbar from "@/components/navbar"
import Prompt from "@/components/prompt"
import RootLayout from "@/components/root-layout"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Home() {
  return (
    <RootLayout title="Jesse">
      <main className="m-3">
        <Navbar active="home" />
        <section className="p-5 backdrop-blur-xl bg-white/50 rounded-xl shadow-2xl">
          <Prompt text="hello">
            <section className="p-3 my-3 text-center text-xl">
              *** 👋 Hello, world! ***
            </section>
            <article className="my-2">
              I'm a computer science student passionate about software development, whether it involves games, web, desktop or mobile applications, and have been programming as a hobby for more than 6 years.
            </article>

            <h2 className=" text-xl mt-7 font-bold" id="pages-on-jessebotics-online">
              <Link href="#pages-on-jessebotics-online">#</Link> Pages on jessebotics.online
            </h2>
            <ul>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>

            <h2 className=" text-xl mt-7 font-bold" id="find-me-on"><Link href="#find-me-on">#</Link> Find me on...</h2>
            <ul>
              <li>
                <Link href="https://github.com/JessebotX">
                  <FontAwesomeIcon className="text-black" icon={faGithub}/> GitHub</Link>
              </li>
            </ul>
          </Prompt>
        </section>
      </main>
    </RootLayout>
  )
}
