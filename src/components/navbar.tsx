import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faHome } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function Navbar({ active }: { active: "home" | "blog" }) {
  return (
    <nav className="ms-3 shadow-2xl">
      <Link href="/" className={`${active === 'home' ? 'text-black font-medium bg-white/50' : ''} text-gray-800 bg-white/30 hover:bg-white/60 rounded-t-xl backdrop-blur-xl px-3 py-2 hover:no-underline hover:text-black inline-block`}>~ (<FontAwesomeIcon icon={faHome}/>) {active === "home" ? <FontAwesomeIcon icon={faCaretDown} /> : <></>}</Link>
      <Link href="/blog" className={`${active === 'blog' ? 'text-black font-medium bg-white/50' : ''} text-gray-800 bg-white/30 hover:bg-white/60 rounded-t-xl backdrop-blur-xl px-3 py-2 inline-block hover:no-underline`}>~/Blog {active === "blog" ? <FontAwesomeIcon icon={faCaretDown} /> : <></>}</Link>
    </nav>
  )
}
