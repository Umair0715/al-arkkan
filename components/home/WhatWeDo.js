import React from 'react'

const WhatWeDo = () => {
    return (
        <div className='py-20'>
            <div className='text-center'>
                <h3 className='text-4xl font-bold'>What We Do</h3>
                <p className='text-grayText mt-6'>Advantages that make Al-arkan the best choice </p>
            </div>
            <div className='flex justify-center pt-16 gap-12 w-full '>
                <div className='w-[250px] text-center flex flex-col gap-3'>
                    <div className='flex items-center justify-center'>
                        <img src="/svgs/training.svg" alt="Training Programs" />
                    </div>
                    <h5 className='text-xl font-semibold'>Training Programs</h5>
                    <p className='text-grayText'>training for Food Safety, Health, Safety & Environment Health programs.</p>
                </div>
                <div className='w-[250px] text-center flex flex-col gap-3 -translate-y-2.5'>
                    <div className='flex items-center justify-center'>
                        <img src="/svgs/trainers.svg" alt="Training Programs" />
                    </div>
                    <h5 className='text-xl font-semibold'>Experienced Trainers</h5>
                    <p className='text-grayText'>experienced trainers provide these services to a large number of organizations, both private and public</p>
                </div>
                <div className='w-[250px] text-center flex flex-col gap-3 -translate-y-1'>
                    <div className='flex items-center justify-center'>
                        <img src="/svgs/accreditation.svg" alt="Training Programs" />
                    </div>
                    <h5 className='text-xl font-semibold'>Accreditation</h5>
                    <p className='text-grayText'>The center is accredited by: Ministry of Municipal and Rural Affairs KSA and others</p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo