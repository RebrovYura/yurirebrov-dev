import React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from './constants';

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 20 },
  exit: { opacity: 0, x: 0, y: 0 }
}

const MobileMenu = ({ open, handleClick }) => {
  return (
    <>
      <AnimatePresence initial={true}>
        {open && (
          <motion.div
            key='menu'
            initial='hidden'
            animate='enter'
            exit='exit'
            variants={variants}
            transition={{ duration: 0.2, type: 'easeInOut' }}
            className='absolute z-[2] right-[20px] top-[80px]'
          >
            <div className='flex md:hidden py-[20px] px-[30px] bg-secondary shadow-lg border-[1px] border-primary rounded-[10px]'>
              <ul className='flex flex-col text-center'>
                {navLinks.map(item => (
                  <li className='my-[10px] px-[15px] inline-block text-primary' key={item.title} onClick={handleClick}>
                    <Link href={`${item.id}`} target={`${item.id === 'https://github.com/RebrovYura/yurirebrov-dev' ? '_blank' : ''}`}>{item.title}</Link>
                    <div className='w-[40px] h-[1px] bg-primary mt-[5px] mx-auto' />
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )
        }
      </AnimatePresence>
    </>
  )
}

export default MobileMenu