import React from 'react'

const BioContent = ({children}) => {
  return (
    <div className='max-w-[480px] text-justify indent-[20px] pl-[15px] text-primary border-l-[1px] border-primary'>
      {children}
    </div>
  )
}

export default BioContent