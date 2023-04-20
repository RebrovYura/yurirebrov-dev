import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const TechCard = ({ link, icon, iconAlt }) => {
  return (
    <motion.div whileTap={{scale: 0.8}} className='w-[60px] h-[60px] p-[5px] bg-primary rounded-[10px] flex items-center justify-center'>
      <Link href={link} target='_blank'>
        <Image src={icon} alt={iconAlt} height={50}/>
      </Link>
    </motion.div>
  )
}

export default TechCard