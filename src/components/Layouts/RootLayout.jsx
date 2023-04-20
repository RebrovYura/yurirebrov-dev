import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='max-w-[780px] mx-auto px-[20px] flex flex-col items-center'>
        {children}
        <Footer />
      </div>
    </>
  )
}

export default RootLayout