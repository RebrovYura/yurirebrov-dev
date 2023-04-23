import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { motion } from 'framer-motion'
import Head from 'next/head'

const variants = {
  hidden: { opacity: 0, x: 0, y: 30 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 30 }
}

const RootLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} | Yuri Rebrov</title>
      </Head>
      <Header />
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: 'easeInOut' }}
        className='max-w-[780px] min-h-[100%] mx-auto px-[20px] flex flex-col items-center'
      >
        {children}
      </motion.div>
      <Footer />
    </>
  )
}

export default RootLayout