import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { navLinks } from './constants'
import { RiMenuLine } from 'react-icons/ri'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'
import Logo from './Logo'

const Header = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <header className='py-[15px] px-[20px] sticky top-[-1px] left-[-1px] right-[-1px] backdrop-blur-[10px] z-[2] w-full'>
      <div className='max-w-[960px] mx-auto flex items-center justify-between'>
        <Logo />
        <div className='flex'>
          <ul className='gap-x-[30px] hidden md:flex md:items-center'>
            {
              navLinks.map(item => (
                <motion.li whileHover={{ color: '#EC9A29' }} className={`font-semibold ${router.pathname === item.id ? 'text-accent underline underline-offset-4' : 'dark:text-primary text-secondary'}`} key={item.id}>
                  <Link href={`${item.id}`} target={`${item.id === 'https://github.com/RebrovYura/yurirebrov-dev' ? '_blank' : ''}`}>
                    {item.title}
                  </Link>
                </motion.li>
              ))
            }
          </ul>
          <div className='flex items-center ml-[30px] gap-x-[15px] md:gap-x-0 realtive'>
            <ThemeToggle handleClick={handleClick} />
            <motion.div whileTap={{ scale: 0.8 }}>
              <div className='p-[10px] rounded-[10px] border-[1px] border-label dark:bg-secondary bg-primary cursor-pointer block md:hidden' onClick={handleClick}>
                <RiMenuLine size={20} />
              </div>
            </motion.div>
            <MobileMenu open={open} handleClick={handleClick} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header