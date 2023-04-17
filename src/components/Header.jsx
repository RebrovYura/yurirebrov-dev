import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { navLinks } from './constants'
import ThemeToggle from './ThemeToggle'
import { RiMenuLine } from 'react-icons/ri'
import MobileMenu from './MobileMenu'
import { motion } from 'framer-motion'
import Logo from './Logo'



const Header = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <header className='py-[15px] px-[20px] realtive'>
      <div className='max-w-[1110px] mx-auto flex items-center justify-between'>
        <Logo/>
        <div className='flex'>
          <ul className='gap-x-[30px] hidden md:flex md:items-center'>
            {
              navLinks.map(item => (
                <li className={`font-semibold ${router.pathname === '/' + item.id ? 'text-accent' : 'text-secondary'}`} key={item.id}>
                  <Link href={`${item.id}`}>
                    {item.title}
                  </Link>
                </li>
              ))
            }
          </ul>
          <div className='flex items-center gap-x-[15px] realtive'>
            <ThemeToggle handleClick={handleClick} />
            <motion.div whileTap={{ scale: 0.8 }}>
              <div className='p-[10px] rounded-[10px] border-[1px] border-label cursor-pointer block md:hidden' onClick={handleClick}>
                <RiMenuLine size={20} />
              </div>
            </motion.div>
            <MobileMenu open={open} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header