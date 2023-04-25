import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const TechCard = ({ link, icon, iconAlt }) => {
  return (
    <Link href={link} target='_blank'>
      <motion.div whileTap={{ scale: 0.8 }} className='w-[50px] h-[50px] p-[5px] dark:bg-primary dark:border-none border-[1px] border-label rounded-[10px] flex items-center justify-center select-none'>
        <Image src={icon} alt={iconAlt} width='full' height={40} />
      </motion.div>
    </Link>
  )
}

export default TechCard