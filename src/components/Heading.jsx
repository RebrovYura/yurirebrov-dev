import React from 'react'
import { motion } from 'framer-motion'
import Photo from './Photo'

const Heading = () => {
  return (
    <div className='flex flex-col items-center my-[100px] md:flex-row-reverse md:gap-x-[50px] md:justify-around'>
      <Photo />
      <div className='mt-[20px]'>
        <p className='text-secondary text-[32px] md:text-[40px] leading-[30px] font-bold text-center md:text-left'>Hi, I&apos;m <span className='text-accent'>Yuri Rebrov</span></p>
        <p className='text-[14px] md:text-[16px] font-light italic text-center md:text-left my-[10px]'>self-taught, striving for new heights</p>
        <motion.div whileTap={{scale: 0.9}}>
          <p className='text-[16px] font-semibold max-w-[480px] text-left border-[1px] border-label rounded-[10px] p-[10px] cursor-pointer select-none'>Digital creator from Belarus. <br /> Interested, motivated, disciplined.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Heading