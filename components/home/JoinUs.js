import React from 'react'

const JoinUs = ({ t }) => {
    return (
        <div className='py-20 px-4 mt-[150px] relative'
            style={{
                background: 'linear-gradient(180deg, rgba(21, 128, 126, 0.9) 0%, #046F6D 100%)'

            }}
        >
            <div className='md:w-[80%] mx-auto text-pure'>
                <div className='lg:w-[50%] md:w-[60%] sm:w-[75%] w-[95%] flex flex-col gap-8'>
                    <h3 className='text-3xl font-semibold'>
                        {t("join.mainHeading")}
                    </h3>
                    <p className='sm:text-base text-sm'>
                        {t("join.p")}    
                    </p>
                    <div>
                        <button className='btn-white'>
                            {t("join.registerNow")}
                        </button>
                    </div>
                </div>
            </div>
            <img className='absolute right-[10%] -bottom-8' src="/svgs/lgLogo.svg" alt="" />
        </div>
    )
}

export default JoinUs