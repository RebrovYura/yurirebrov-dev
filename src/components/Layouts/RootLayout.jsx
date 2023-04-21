import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='max-w-[780px] min-h-[100%] mx-auto px-[20px] flex flex-col items-center'>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default RootLayout