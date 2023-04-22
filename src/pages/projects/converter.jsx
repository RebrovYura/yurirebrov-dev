import RootLayout from '@/components/Layouts/RootLayout'
import Image from 'next/image'
import React from 'react'
import mainPage from '../../../public/images/projects/converter01.png'
import converterPage from '../../../public/images/projects/converter02.png'
import BioName from '@/components/BioName'
import Head from 'next/head'
import Link from 'next/link'

const converter = () => {
  return (
    <>
      <Head>
        <title>Currency Converter | Yuri Rebrov</title>
      </Head>
      <RootLayout>
        <div className='mt-[50px]'>
          <BioName>Welcome to the Currency Converter App!</BioName>
          <div className='flex flex-col gap-y-[40px] mb-[30px]'>
            <Image priority src={mainPage} alt='Main page' />
            <Image priority src={converterPage} alt='Converter page' />
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
            <ul className='text-primary list-disc flex flex-col gap-y-[10px] '>
              <li><Link href="https://vitejs.dev/" className='text-accent'>Vite+React</Link> - Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.</li>
              <li><Link href="https://tailwindcss.com/" className='text-accent'>Tailwindcss</Link> - Tailwind CSS is an open source CSS framework.</li>
              <li><Link href="https://chakra-ui.com/" className='text-accent'>Chakra UI</Link> - Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.</li>
              <li><Link href="https://www.exchangerate-api.com/" className='text-accent'>ExchangeRate-API</Link> - Currency conversion rates for 161 currencies.</li>
            </ul>
          </div>
        </div>
      </RootLayout>
    </>
  )
}

export default converter