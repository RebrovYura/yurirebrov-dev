import Head from 'next/head'
import RootLayout from '@/components/Layouts/RootLayout'
import Heading from '@/components/Heading'
import { aboutText } from '@/components/constants'
import {
  html5,
  css,
  js,
  react,
  sass,
  tailwind,
  vite,
  next,
  chakra,
  firebase
} from '../components/constants/images'
import BioName from '@/components/BioName'
import BioContent from '@/components/BioContent'
import TechCard from '@/components/TechCard'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage | Yuri Rebrov</title>
        <meta name="description" content="Yuri's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout>
        <Heading />
        <div className='flex flex-col items-center gap-y-[50px]'>
          <div className='flex flex-col'>
            <BioName>About me</BioName>
            <BioContent>{aboutText}</BioContent>
          </div>
          <div className='flex flex-col'>
            <BioName>My knowledge</BioName>
            <BioContent>
              <div className='flex flex-wrap gap-[15px]'>
                <TechCard link='https://en.wikipedia.org/wiki/HTML5' icon={html5} iconAlt='html5' />
                <TechCard link='https://en.wikipedia.org/wiki/HTML5' icon={css} iconAlt='html5' />
                <TechCard link='https://en.wikipedia.org/wiki/HTML5' icon={sass} iconAlt='html5' />
                <TechCard link='https://en.wikipedia.org/wiki/HTML5' icon={tailwind} iconAlt='html5' />
                <TechCard link='https://en.wikipedia.org/wiki/HTML5' icon={js} iconAlt='html5' />
                <TechCard link='https://en.wikipedia.org/wiki/HTML5' icon={react} iconAlt='html5' />
                <TechCard link='https://en.wikipedia.org/wiki/HTML5' icon={vite} iconAlt='html5' />
                <TechCard link='https://en.wikipedia.org/wiki/HTML5' icon={next} iconAlt='html5' />
                <TechCard link='https://en.wikipedia.org/wiki/HTML5' icon={chakra} iconAlt='html5' />
                <TechCard link='https://en.wikipedia.org/wiki/HTML5' icon={firebase} iconAlt='html5' />
              </div>
            </BioContent>
          </div>
        </div>

      </RootLayout>
    </>
  )
}
