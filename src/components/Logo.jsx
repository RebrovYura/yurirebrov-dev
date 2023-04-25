import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.png'

const Logo = () => {
  return (
    <Link href='/'>
      <div className='text-[22px] font-bold cursor-pointer flex items-center gap-x-[5px]'>
        <Image priority src={logo} width={25} alt='logo'/>
        <span>Yuri Rebrov</span>
      </div>
    </Link>
  )
}

export default Logo