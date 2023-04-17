import React from 'react'
import Photo from './Photo'

const Bio = () => {
  return (
    <div className='flex flex-col items-center md:flex-row-reverse md:gap-x-[50px]'>
      <Photo />
      <div className='mt-[20px]'>
        <p className='text-secondary text-[32px] md:text-[40px] leading-[30px] font-bold text-center md:text-left'>Hi, I&apos;m <span className='text-accent'>Yuri Rebrov</span></p>
        <p className='text-[14px] md:text-[18px] font-light italic text-center md:text-left my-[10px]'>self-taught, striving for new heights</p>
        <p className='text-[16px] max-w-[480px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
    </div>
  )
}

export default Bio