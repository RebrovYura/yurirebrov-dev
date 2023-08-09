import { motion } from 'framer-motion'
import Photo from './Photo'

const Welcome = () => {

  return (
    <div className='flex flex-col items-center my-[120px] md:my-[150px] md:flex-row-reverse md:gap-x-[50px] md:justify-between w-full'>
      <Photo />
      <div className='mt-[20px]'>
        <p className='text-[32px] md:text-[40px] leading-[30px] font-bold text-center md:text-left'>Hi, I&apos;m <span className='text-accent'>Yuri Rebrov</span></p>
        <p className='text-[14px] md:text-[16px] font-light italic text-center md:text-left my-[13px]'>self-taught, striving for new heights</p>
        <motion.a
          href='https://drive.google.com/file/d/1BoxwCgfUYyXHH6Mbatm7DLl6r94MAsip/view?usp=sharing'
          target='_blank'
          whileTap={{ scale: 0.9 }}
          className='text-[16px] block font-semibold max-w-[480px] text-left border-[2px] dark:border-primary border-label rounded-[10px] p-[10px] cursor-pointer select-none'
        >
          Digital creator from Belarus.<br />Interested, motivated, disciplined. <br />
          <span className='text-accent'>Click to receive my resume!</span>
        </motion.a>
      </div>
    </div>
  )
}

export default Welcome