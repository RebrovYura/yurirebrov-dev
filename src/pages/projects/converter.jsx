import RootLayout from '@/components/Layouts/RootLayout'
import Image from 'next/image'
import React from 'react'
import mainPage from '../../../public/images/projects/converter01.png'
import converterPage from '../../../public/images/projects/converter02.png'
import BioName from '@/components/BioName'
import Head from 'next/head'
import Link from 'next/link'
import { Title, ProjectImage, ProjectLink } from '@/components/Project'

const converter = () => {
  return (
    <>
      <Head>
        <title>Currency Converter | Yuri Rebrov</title>
      </Head>
      <RootLayout>
        <div className='mt-[50px]'>
          <Title>Currency Converter</Title>
          <BioName>Welcome to the Currency Converter App!</BioName>
          <div className='flex flex-col gap-y-[40px] mb-[30px]'>
            <ProjectImage src={mainPage} alt='Main page' />
            <ProjectImage src={converterPage} alt='Converter page' />
          </div>
          <BioName>This project has the following features:</BioName>
          <div className='ml-[30px] mb-[30px]'>
            <ul className='text-primary list-disc flex flex-col gap-y-[10px] '>
              <li>You can convert from one currency to another;</li>
              <li>You can see exchanges rate for select currency;</li>
              <li>Supports light/dark themes.</li>
            </ul>
          </div>
          <BioName>Stack</BioName>
          <div className='ml-[30px] mb-[30px]'>
            <ul className='text-primary list-disc flex flex-col gap-y-[10px]'>
              <li><ProjectLink href="https://vitejs.dev/">Vite+React</ProjectLink> - Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.</li>
              <li><ProjectLink href="https://tailwindcss.com/">Tailwindcss</ProjectLink> - Tailwind CSS is an open source CSS framework.</li>
              <li><ProjectLink href="https://chakra-ui.com/">Chakra UI</ProjectLink> - Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.</li>
              <li><ProjectLink href="https://www.exchangerate-api.com/">ExchangeRate-API</ProjectLink> - Currency conversion rates for 161 currencies.</li>
            </ul>
          </div>
        </div>
      </RootLayout>
    </>
  )
}

export default converter