import { SiGmail } from 'react-icons/si'

const Footer = () => {
  const date = new Date
  return (
    <footer className='flex justify-center w-full dark:bg-secondary bg-primary'>
      <div className='max-w-[960px] py-[15px] w-full flex flex-col items-center text-label'>
        <div className='w-[90%] h-[1px] bg-label' />
        <p className=' py-[15px] text-[12px] md:text-[16px]'>All rights reserved | &copy; Yuri Rebrov {date.getFullYear()}</p>
        <p className='flex items-center gap-x-[10px]'><SiGmail size={15}/>yurirebrov01@gmail.com</p>
      </div>
    </footer>
  )
}

export default Footer