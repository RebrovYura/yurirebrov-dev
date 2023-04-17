import Head from 'next/head'
import RootLayout from '@/components/Layouts/RootLayout'
import Heading from '@/components/Heading'
import Bio from '@/components/Bio'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yuri Rebrov | Homepage</title>
        <meta name="description" content="Yuri's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout>
        <Heading />
        <Bio />
      </RootLayout>
    </>
  )
}
