import Link from 'next/link'
import React from 'react'

const Facilities = ({ t }) => {
    return (
        <div className='flex md:flex-row flex-col justify-between gap-8 lg:w-[85%] w-[95%] mx-auto h-full py-20 '>
            <div className='flex-[0.4] flex flex-col gap-6'>   
                <h3 className='md:text-4xl text-3xl font-bold'>
                    {t("facilities.mainHeading")}
                </h3>
                <p className='text-grayText'>
                    {t("facilities.p")}
                </p>
                <div className='mt-2'>
                    <button className="btn-secondary flex gap-2" style={{
                        padding: '8px 1rem'
                    }}>
                        <span>{t("facilities.viewMore")}</span>
                        <img src="/svgs/rightAngle.svg" alt="view more" />
                    </button>
                </div>
            </div>
            <div className='flex-[0.6] flex flex-col gap-4'>
                {
                    [...Array(3).keys()].map((item , i) => (
                        <div key={i} className='bg-lightBlue rounded-[20px] rounded-br-[50px] py-4 px-5 flex items-center justify-between'>
                            <div className='sm:flex-[0.6] flex-[0.7]'>
                                <h6 className='sm:text-xl text-lg font-semibold'>   
                                {t("facilities.trainingCenterName")}
                                </h6>
                                <p className='text-grayText mt-2 sm:text-base text-sm'>
                                    {t("facilities.trainingCenterNameP")}
                                </p>
                            </div>
                            <div className='sm:flex-[0.4] flex-[0.3] flex items-center justify-center gap-2 flex-col'>
                                <img src="/svgs/map.svg" alt="" />
                                <Link href='/map' className='text-primary font-medium'>
                                    {t("facilities.viewMap")}
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Facilities