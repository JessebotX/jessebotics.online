import RootLayout from "@/components/root-layout"
import Navbar from "@/components/navbar"
import Prompt from "@/components/prompt"
import path from "path"
import fs from "fs"
import matter from "gray-matter"
import Link from "next/link"
import { formatDate } from "@/lib/datetime"

export default function Blog({ posts }: any) {
  return (
    <RootLayout title="Blog | Jesse">
      <main className="m-3">
        <Navbar active="blog" />
        <section className="p-5 backdrop-blur-xl bg-white/50 rounded-xl shadow-2xl">
          <Prompt text="ls -lA" link="/blog">
            <article className="p-1">
              <h1 className="text-xl font-bold">Blog</h1>
              <p>{posts.length} entries</p>
            </article>
            <ul className="list-none m-0">
              {posts.map(({ slug, frontMatter }: any) => (
                <li key={slug}>
                  <Link href={`/blog/${slug}`} className="flex hover:no-underline hover:bg-black/10 p-1">
                    <span className="font-bold text-blue-800">{formatDate(frontMatter.date)}</span>
                    <span className="font-bold ms-10 text-black">{frontMatter.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Prompt>
        </section>
      </main>
    </RootLayout>
  )
}

export async function getStaticProps() {
  const directoryPath = path.join("src", "posts")

  const files = fs.readdirSync(directoryPath)

  const posts = files.filter(file => file.includes(".md")).map(file => {
    const slug = file.replace(".md", "")

    const markdown = fs.readFileSync(path.join(directoryPath, file))

    const { data: frontMatter } = matter(markdown)
    console.log(frontMatter)

    return {
      slug,
      frontMatter
    }
  }).sort((a, b) => {
    return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  }).reverse()

  return {
    props: {
      posts
    }
  }
}
