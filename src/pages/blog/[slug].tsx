import path from "path"
import fs from "fs"
import matter from "gray-matter"
import readingTime from "reading-time"
import RootLayout from "@/components/root-layout"
import Prompt from "@/components/prompt"
import Navbar from "@/components/navbar"
import { marked } from "marked"
import Link from "next/link"
import { formatDate } from "@/lib/datetime"

export default function BlogPost({ frontMatter, slug, content, readingTimeMinutes, wordCount }) {
  return (
    <RootLayout title={`${frontMatter.title} | Jesse`}>
      <main className="m-3">
        <Navbar active="blog" />
        <section className="p-5 backdrop-blur-xl bg-white/50 rounded-xl shadow-2xl">
          <Prompt text={`cat ${slug}.md`} link={`/blog`} speed={60}>
            <section className="border-2 rounded-lg p-3 border-black">
              file: <Link href={`/blog/${slug}`}>{slug}.md</Link> · <span className="text-gray-700 text-sm">{wordCount} words</span> · <span className="text-gray-700 text-sm">{readingTimeMinutes} min read</span> · <span className="text-gray-700 text-sm">last mod: {formatDate(frontMatter.date)}</span>
            </section>

            <section className="mt-8">
              <article className="mb-4">
                <h1 className="text-2xl text-center font-bold">{frontMatter.title}</h1>
                <p className="text-center">by Jesse Huang</p>
              </article>
              <article className="post-contents" dangerouslySetInnerHTML={{__html: marked(content)}} />
            </section>
          </Prompt>
        </section>
      </main>
    </RootLayout>
  )
}

export async function getStaticPaths() {
  const directoryPath = path.join("src", "posts")
  const files = fs.readdirSync(directoryPath)

  const paths = files.filter(file => file.includes(".md")).map(file => ({
    params: {
      slug: file.replace(".md", "")
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {slug}}) {
  const directoryPath = path.join("src", "posts")
  const markdown = fs.readFileSync(path.join(directoryPath, slug + ".md"))

  const { data: frontMatter, content } = matter(markdown)

  const readingTimeMinutes = Math.round(readingTime(content).minutes);
  const wordCount = readingTime(content).words;

  return {
    props: {
      frontMatter,
      slug,
      content,
      readingTimeMinutes,
      wordCount
    }
  }
}
