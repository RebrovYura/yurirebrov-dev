import React from 'react'

const ContentLayout = ({ children }) => {
  return (
    <div className='max-w-[800px] w-full mx-auto sm:px-[15px] px-0'>
      {children}
    </div>
  )
}

export default ContentLayout