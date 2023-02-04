import React from 'react'

const Logo = ({ white }) => {
    return (
        <div className='flex items-center gap-3 '>
            <img 
            src={`/svgs/${white ? 'whiteLogo' : 'logo'}.svg`} 
            alt='Logo' 
            className='sm:w-full w-[30px]'
            />
            <h3 className={`text-lg font-semibold ${white ? 'text-pure' : ''} `}>LOGO</h3>
        </div>
    )
}

export default Logo