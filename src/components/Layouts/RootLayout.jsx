import React from 'react'
import Header from '../Header'
import ContentLayout from './ContentLayout'
import Footer from '../Footer'

const RootLayout = ({ children }) => {
  return (
    <>
      <div className='max-w-[800px] mx-auto px-[20px] flex flex-col'>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default RootLayout