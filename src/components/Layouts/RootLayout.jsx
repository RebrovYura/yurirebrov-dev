import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'

const variants = {
  hidden: { opacity: 0, x: 30, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -30, y: 0 }
}

const RootLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Yuri's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title} | Yuri Rebrov</title>
      </Head>
      <div className='min-h-full flex flex-col font-poppins dark:bg-secondary bg-primary dark:text-primary text-secondary'>
        <Header />
        <div className='flex-auto'>
          <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            className='max-w-[780px] mx-auto px-[20px] mb-[50px] flex flex-col items-center'
          >
            {children}
          </motion.main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default RootLayout