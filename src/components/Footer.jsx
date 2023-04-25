import React from 'react'

const Footer = () => {
  const date = new Date
  return (
    <footer className='flex justify-center w-full dark:bg-secondary bg-primary'>
      <div className='max-w-[960px] w-full flex flex-col items-center'>
        <div className='w-[90%] h-[1px] bg-label' />
        <p className='text-label py-[15px] text-[12px] md:text-[16px]'>All rights reserved | &copy; Yuri Rebrov {date.getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer