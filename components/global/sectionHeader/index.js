import React from 'react'

const SectionHeader = ({ heading }) => {
    return (
        <div className='relative md:h-[300px] sm:h-[200px] h-[150px] flex items-center justify-center' style={{
            background: 'linear-gradient(180deg, rgba(21, 128, 126, 0.8) 0%, #046F6D 100%)'
        }}
        
        >
            <h1 className='relative z-50 md:text-5xl sm:text-4xl text-3xl font-bold text-pure text-center px-2'>{heading}</h1>
           <div className='absolute md:left-[10%] -left-[10%] -bottom-4'>
                <img src="/svgs/lgLogo.svg" alt="Lg Logo" />
           </div>
        </div>
    )
}

export default SectionHeader