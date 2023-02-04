import { useRouter } from 'next/router'
import React from 'react'

const Register = ({ t }) => {
    const { locale } = useRouter();

    return (
        <div className={`flex flex-col gap-4 w-full
        ${locale === 'en' ? "justify-start" : "justify-end"}
        `}>
            <p className={`text-grayText w-full
            ${locale === 'en' ? "text-left" : "text-right"}
            `}>
                {t("register.subHeading")}
            </p>
            <div className={`flex items-center gap-4 mt-4
            ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
            `}>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-lightBlue rounded-full'>
                    <img src="/svgs/student.svg" alt="SVG" />
                </div>
                <p className='font-semibold'>
                    {t("register.student")}
                </p>
            </div>
            <div className={`flex items-center gap-4 mt-4
            ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
            `}>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-lightBlue rounded-full'>
                    <img src="/svgs/corporate.svg" alt="SVG" />
                </div>
                <p className='font-semibold'>
                    {t("register.corporate")}
                </p>
            </div>
            <div className={`flex items-center gap-4 mt-4
            ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
            `}>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-lightBlue rounded-full'>
                    <img src="/svgs/trainingCenter.svg" alt="SVG" />
                </div>
                <p className='font-semibold'>
                    {t("register.trainingCenter")}
                </p>
            </div>
            <div className={`flex items-center gap-4 mt-4
            ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
            `}>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-lightBlue rounded-full'>
                    <img src="/svgs/medicalCenter.svg" alt="SVG" />
                </div>
                <p className='font-semibold'>
                    {t("register.medicalCenter")}
                </p>
            </div>
        </div>
    )
}

export default Register