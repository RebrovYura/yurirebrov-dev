import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import RootLayout from '@/components/Layouts/RootLayout'
import { motion } from 'framer-motion'
import Button from '@/components/Button'

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>Page not found | Yuri Rebrov</title>
      </Head>
      <RootLayout>
        <div className='min-h-[100vh] flex flex-col justify-center items-center'>
          <p className='text-[20px] md:text-[32px] font-bold mb-[30px] text-center wrap text-primary'>Oh, man... I kind of lost this page 😕</p>
          <Button link='/'>Go back home</Button>
        </div>
      </RootLayout>
    </>
  )
}

export default PageNotFound