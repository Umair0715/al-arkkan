import Link from 'next/link'
import React from 'react'

const SectionNavigator = ({ items }) => {
    return (
        <div className='flex items-cener gap-4'>
            {
                items?.map((item , i) => (
                    <div key={i} className='flex items-center gap-4 '>
                        <Link 
                        href={`/${item.url}`} 
                        className={`font-medium ${items.length - 1 === i ? 'text-black' : 'text-primary'} `}
                        >
                            {item.name}
                        </Link>
                        {
                            items.length - 1 !== i && 
                            <img src="/svgs/right.svg" alt="Right Angle" /> 
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default SectionNavigator