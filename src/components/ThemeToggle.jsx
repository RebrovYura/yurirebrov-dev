import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'

const ThemeToggle = ({}) => {
  const [theme, setTheme] = useState(true)
  return (
    <>
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          whileTap={{scale: 0.7}}
          onClick={() => setTheme(!theme)}
        >
          <button className={`${theme ? 'bg-primary text-accent' : 'bg-secondary text-primary'} p-[10px] rounded-[10px]`}>
            {theme ? <RiSunFill size={20} className='text-initial'/> : <RiMoonClearFill size={20} className='text-initial' />}
          </button>
        </motion.div>
      </AnimatePresence>

    </>
  )
}

export default ThemeToggle