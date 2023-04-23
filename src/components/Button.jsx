import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Button = ({ link, children }) => {
  return (
    <Link href={link} className='w-fit'>
      <motion.button whileTap={{ scale: 0.8 }} className='bg-logo px-[10px] py-[10px] rounded-[5px] text-primary font-semibold max-w-[200px]'>
        {children}
      </motion.button>
    </Link>
  )
}

export default Button