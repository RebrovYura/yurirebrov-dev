import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <Link href='/'>
      <motion.div className='text-[22px] font-bold cursor-pointer'>
        <span className='text-primary'>Yuri Rebrov</span>
      </motion.div>
    </Link>
  )
}

export default Logo