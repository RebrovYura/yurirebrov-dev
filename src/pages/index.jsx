import Head from 'next/head'
import Link from 'next/link'
import RootLayout from '@/components/Layouts/RootLayout'
import Heading from '@/components/Heading'
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
import { AiFillGithub } from 'react-icons/ai'
import { FaArtstation, FaTelegramPlane } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      <RootLayout title='Homepage'>
        <Heading />
        <div className='flex flex-col gap-y-[50px]'>
          <div className='flex flex-col'>
            <BioName>About me 👋</BioName>
            <BioContent>
              I&apos;m Yuri Rebrov and I&apos;m a digital creator from Belarus. I started learning programming after I entered college in 2016. It was a long adventure lasting 4 years. I have gained a huge amount of knowledge in a wide variety of areas of software development. I started learning with languages such as <span className='text-accent'>Assembler</span>, <span className='text-accent'>Pascal</span> and <span className='text-accent'>Delphi</span>. Then there was <span className='text-accent'>C#</span> and work with <span className='text-accent'>SQL</span>.<br /> For all the training, I managed to try myself in the development of <span className='text-accent'>Windows applications</span>, <span className='text-accent'>game development</span>, <span className='text-accent'>web development</span>, <span className='text-accent'>writing algorithms</span>, as well as working with <span className='text-accent'>AR</span>, which became the topic of my diploma.
              <br />I am currently studying programming at the university.
            </BioContent>
          </div>
          <Button link='/projects'>See my projects</Button>
          <div className='flex flex-col'>
            <BioName>My knowledge 📚</BioName>
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
          <div className='flex flex-col'>
            <BioName>Links 🔗</BioName>
            <BioContent>
              <div className='flex flex-col gap-y-[15px] w-fit'>
                <Link href='https://github.com/RebrovYura' target='_blank' className='flex items-center hover:bg-logo hover:opacity-90 transition-colors p-[8px] rounded-[5px]'><AiFillGithub size={20} /> GitHub</Link>
                <Link href='https://www.artstation.com/yurirebrov' target='_blank' className='flex items-center hover:bg-logo hover:opacity-90 transition-colors p-[8px] rounded-[5px]'><FaArtstation size={20} /> ArtStation</Link>
                <Link href='https://vk.com/yrebrov1999' target='_blank' className='flex items-center hover:bg-logo hover:opacity-90 transition-colors p-[8px] rounded-[5px]'><SlSocialVkontakte size={20} /> VK</Link>
                <Link href='https://t.me/davenli' target='_blank' className='flex items-center hover:bg-logo hover:opacity-90 transition-colors p-[8px] rounded-[5px]'><FaTelegramPlane size={20} /> Telegram</Link>
              </div>
            </BioContent>
          </div>
        </div>
      </RootLayout>
    </>
  )
}
