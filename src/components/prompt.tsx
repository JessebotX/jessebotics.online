import { useState, useEffect } from "react"
import Link from "next/link"

interface PromptProps {
  link?: string
  text: string
  children?: React.ReactNode
  speed?: number
}

export default function Prompt({ link, text, children, speed }: PromptProps) {
  const [input, setInput] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < (text.length)) {
      setTimeout(() => {
        if (text[index] === ' ') {
          setInput(input + '\xa0')
        } else {
          setInput(input + text[index])
        }
      }, speed ? speed : 250)

      setIndex(index + 1)
    } else {
      // hide cursor
      setTimeout(() => {
        document.querySelector("#prompt-cursor")?.classList.add("hidden")
      }, 250)
      // show content
      setTimeout(() => {
        document.querySelector("#prompt-content")?.classList.remove("hidden")
      }, 350)
    }
  }, [input])

  return (
    <>
      <section className="flex flex-wrap">
        <h1 className="text-2xl font-bold"><span className='text-purple-700'>JessebotX [Jesse Huang]</span></h1>
        <h1 className="ms-3 text-2xl font-bold text-red-500">@ jessebotics.online</h1>
      </section>
      <div className="flex mt-2">
        <h2 className="text-lg font-bold text-gray-700"><Link href={link ? link : '/'}>~{link}</Link> $ </h2>
        <h2 className="text-lg ms-2 text-gray-700">{input}</h2>
        <span id="prompt-cursor" className="ms-[0.25ch] w-[0.7rem] bg-black"></span>
      </div>
      <article id="prompt-content" className="mt-16 hidden">
        {children}
      </article>
    </>
  )
}
