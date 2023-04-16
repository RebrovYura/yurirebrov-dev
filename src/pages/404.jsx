import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <div className='min-h-[100vh] flex flex-col justify-center items-center'>
        <p className='text-[32px] font-bold mb-[30px]'>Oh, man... I lost this Page 😕</p>
        <Link href='/' className='bg-accent px-[15px] py-[10px] rounded-[10px] text-secondary font-semibold transition-opacity hover:opacity-80'>
          GO BACK
        </Link>
      </div>
    </>
  )
}

export default PageNotFound