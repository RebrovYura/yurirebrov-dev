import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yuri Rebrov | Homepage</title>
        <meta name="description" content="Yuri's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Header/>
      </section>
    </>
  )
}
