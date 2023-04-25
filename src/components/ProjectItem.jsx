import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({ link, title, children, thumbnail }) => {
  return (
    <Link href={`projects/${link}`}>
      <div className='max-w-[420px] flex flex-col justify-center items-center p-[10px] dark:bg-secondary bg-primary shadow-lg rounded-[5px]'>
        <Image priority src={thumbnail} alt={`${title}`} width={400} className='text-center rounded-[10px]'/>
        <p className='font-semibold text-[24px] my-[10px]'>{title}</p>
        <p className='font-normal text-[16px] text-center'>{children}</p>
      </div>
    </Link>
  )
}

export default ProjectItem