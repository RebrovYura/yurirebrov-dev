import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { navLinks } from './constants'
import ThemeToggle from './ThemeToggle'



const Header = () => {
  const router = useRouter()
  { console.log(router.pathname) }
  return (
    <div className='py-[15px] px-[20px]'>
      <div className='max-w-[1110px] mx-auto flex items-center justify-between'>
        <Link href='/'>
          <div className='text-[32px] font-bold cursor-pointer'>
            <span className='text-logo'>Y</span>
            <span className='text-secondary'>Rebrov</span>
          </div>
        </Link>
        <ul className='gap-x-[30px] hidden md:flex md:items-center'>
          {
            navLinks.map(item => (
              <li className={`font-semibold ${router.pathname === '/' + item.id ? 'text-accent' : 'text-secondary'}`} key={item.id}>
                <Link href={`/${item.id}`}>
                  {item.title}
                </Link>
              </li>
            ))
          }
          <li>
            <ThemeToggle/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header