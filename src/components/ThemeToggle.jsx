import { motion } from 'framer-motion'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'
import useColorMode from './hooks/useColorMode'

const ThemeToggle = ({ }) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <>
      <motion.button
        whileTap={{ scale: 0.7 }}
        className={`bg-secondary dark:bg-primary text-primary dark:text-accent p-[10px] rounded-[10px]`}
        onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
      >
        {colorMode == 'dark' ? <RiSunFill size={20} className='text-initial' /> : <RiMoonClearFill size={20} className='text-initial' />}
      </motion.button>
    </>
  )
}

export default ThemeToggle