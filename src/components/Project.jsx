import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdKeyboardArrowRight } from 'react-icons/md'

export const ProjectTitle = ({ children }) => {
  return (
    <div className='font-normal text-[18px] my-[20px] flex items-center'>
      <Link href='/projects' className='text-label hover:underline'>Projects</Link>
      <span className='inline-block'>{' '} <MdKeyboardArrowRight size={20} className='text-label' /> {' '}</span>
      <span className='text-[18px] text-accent font-semibold'>{children}</span>
    </div>
  )
}

export const ProjectImage = ({ src, alt }) => {
  return (
    <Image src={src} alt={alt} width='full' className='rounded-[10px]' />
  )
}

export const ProjectLink = ({ href, children }) => {
  return (
    <Link href={href} target='_blank' className='text-accent hover:underline'>{children}</Link>
  )
}

export const ProjectBlock = ({ children }) => {
  return (
    <div className='ml-[30px] mb-[30px]'>
      <ul className='list-disc flex flex-col gap-y-[10px]'>
        {children}
      </ul>
    </div>
  )
}

export const ProjectBadge = ({ children }) => {
  return (
    <div className='text-primary'>
      {children}
    </div>
  )
}

