import Head from "next/head";
import { Fira_Code } from "next/font/google"

const firaCode = Fira_Code({ subsets: [ "latin" ]})

export default function RootLayout({ title, children }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={firaCode.className}>
        {children}
      </div>
    </>
  )
}
