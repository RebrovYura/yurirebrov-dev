import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { navLinks } from './constants';

const show = {
  opacity: 1,
  display: "block",
}

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none"
  }
};


const MobileMenu = ({ open }) => {
  return (
    <motion.div
      animate={open ? show : hide}
      transition={{ duration: 0.2 }}
      className='absolute right-[20px] top-[80px]'
    >
      <div className='flex md:hidden py-[20px] px-[30px] bg-primary shadow-lg border-[1px] border-label rounded-[10px]'>
        <ul className='flex flex-col text-center'>
          {navLinks.map(item => (
            <li className='my-[10px] inline-block' key={item.title}>
              <Link href={`${item.id}`}>{item.title}</Link>
              <div className='w-[40px] h-[1px] bg-secondary mt-[5px] mx-auto' />
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default MobileMenu