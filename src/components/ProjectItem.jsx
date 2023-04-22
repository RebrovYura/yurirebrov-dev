import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const ProjectItem = ({ link, title, children, thumbnail }) => {
  return (
    <Link href={`projects/${link}`}>
      <motion.div whileHover={{scale: 0.95}} className='max-w-[420px] flex flex-col justify-center items-center p-[10px] bg-secondary shadow-lg text-primary rounded-[5px]'>
        <Image priority src={thumbnail} alt={`${title}`} width={400} className='text-center rounded-[10px]'/>
        <p className='font-semibold text-[24px] my-[10px]'>{title}</p>
        <p className='font-normal text-[16px] text-center'>{children}</p>
      </motion.div>
    </Link>
  )
}

export default ProjectItem