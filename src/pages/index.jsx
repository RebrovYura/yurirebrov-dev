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
                <TechCard link='https://en.wikipedia.org/wiki/CSS' icon={css} iconAlt='css' />
                <TechCard link='https://sass-lang.com/' icon={sass} iconAlt='sass' />
                <TechCard link='https://tailwindcss.com/' icon={tailwind} iconAlt='tailwind' />
                <TechCard link='https://en.wikipedia.org/wiki/JavaScript' icon={js} iconAlt='js' />
                <TechCard link='https://react.dev/' icon={react} iconAlt='react' />
                <TechCard link='https://vitejs.dev/' icon={vite} iconAlt='vite' />
                <TechCard link='https://nextjs.org/' icon={next} iconAlt='next' />
                <TechCard link='https://chakra-ui.com/' icon={chakra} iconAlt='chakra' />
                <TechCard link='https://firebase.google.com/' icon={firebase} iconAlt='firebase' />
              </div>
            </BioContent>
          </div>
        </div>

      </RootLayout>
    </>
  )
}
