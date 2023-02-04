import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Facilities = ({ t }) => {
    const { locale } = useRouter();

    return (
        <div className={`flex  flex-col justify-between gap-8 lg:w-[85%] w-[95%] mx-auto h-full py-20 
        ${locale === 'en' ? "md:flex-row" : "md:flex-row-reverse"}
        `}>
            <div className={`flex-[0.4] flex flex-col gap-6 
            ${locale === 'en' ? "text-left" : "text-right"}
            `}>   
                <h3 className='md:text-4xl text-3xl font-bold'>
                    {t("facilities.mainHeading")}
                </h3>
                <p className='text-grayText'>
                    {t("facilities.p")}
                </p>
                <div className={`mt-2
                ${locale === 'en' ? "flex justify-start" : "flex justify-end"}
                `}>
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
                        <div key={i} className={`bg-lightBlue rounded-[20px] rounded-br-[50px] py-4 px-5 flex items-center justify-between
                        ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                        `}>
                            <div className={`sm:flex-[0.6] flex-[0.7] 
                            ${locale === 'en' ? "text-left" : "text-right"}
                            `}>
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