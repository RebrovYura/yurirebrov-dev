import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='max-w-[960px] mx-auto sm:px-[15px] px-0'>
        {children}
    </div>
  )
}

export default MainLayout