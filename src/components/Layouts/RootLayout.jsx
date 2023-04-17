import React from 'react'
import Header from '../Header'
import MainLayout from './MainLayout'
import Footer from '../Footer'

const RootLayout = ({ children }) => {
    return (
        <div className='max-w-[1110px] mx-auto px-[20px]'>
            <Header />
            <MainLayout>

            </MainLayout>
            <Footer />
        </div>
    )
}

export default RootLayout