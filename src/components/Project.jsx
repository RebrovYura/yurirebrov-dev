import React from 'react'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'

export const Title = ({ children }) => {
  return (
    <div className='font-normal text-[18px] my-[20px] flex items-center'>
      <Link href='/projects' className='text-label hover:underline'>Projects</Link>
      <span className='inline-block'>{' '} <MdKeyboardArrowRight size={20} className='text-label' /> {' '}</span>
      <span className='text-[18px] text-accent font-semibold'>{children}</span>
    </div>
  )
}