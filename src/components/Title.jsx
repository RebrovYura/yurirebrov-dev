import React from 'react'

const BioName = ({ children }) => {
    return (
        <div className='mb-[20px]'>
            <h2 className='text-[28px] font-bold'>{children}</h2>
        </div>
    )
}

export default BioName