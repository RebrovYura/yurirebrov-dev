import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <div className='text-[32px] font-bold cursor-pointer'>
        <span className='text-logo'>Y</span>
        <span className='text-secondary'>Rebrov</span>
      </div>
    </Link>
  )
}

export default Logo