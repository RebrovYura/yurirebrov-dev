import React from 'react'

const Footer = () => {
  const date = new Date
  return (
    <footer className='flex flex-col items-center mt-[40px]'>
      <div className='w-[90%] h-[1px] bg-label'/>
      <p className='text-label py-[15px]'>All rights reserved | &copy; Yuri Rebrov {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer