import React from 'react'
import Image from 'next/image'
import avatar from '../../public/me.jpeg'

const Photo = () => {
  return (
    <Image src={avatar} priority width={250} className='rounded-[400px] border-4 dark:border-primary border-secondary' alt='Author' />
  )
}

export default Photo