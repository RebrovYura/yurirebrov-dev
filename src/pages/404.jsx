import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import MainLayout from '@/components/Layouts/MainLayout'
import { motion } from 'framer-motion'

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>Yuri Rebrov | Page not found</title>
      </Head>
      <MainLayout>
        <div className='min-h-[100vh] flex flex-col justify-center items-center'>
          <p className='text-[20px] md:text-[32px] font-bold mb-[30px] text-center wrap'>Oh, man... I kind of lost this page 😕</p>
          <motion.div whileTap={{scale: 0.8}}>
            <Link href='/' className='bg-accent px-[15px] py-[10px] rounded-[10px] text-secondary font-semibold transition-opacity'>
              GO BACK
            </Link>
          </motion.div>
        </div>
      </MainLayout>
    </>
  )
}

export default PageNotFound