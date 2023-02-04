import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
gsap.registerPlugin(ScrollTrigger);

const Announcements = ({ t }) => {
    const announcementsImgRef = useRef(null);
    const { locale } = useRouter();

    useEffect(() => {
        const el = announcementsImgRef.current;
        gsap.fromTo( el , 
        { x : locale === 'en' ? "20%" : "-20%" , opacity : 0 } , { x : 0 , opacity : 1 , duration : 1  , 
            scrollTrigger : {
                trigger : el , 
                start : 'top 70%'
            }
        })
    }, []);

    return (
        <div className='bg-lightBlue py-20'>
            <div className={`lg:w-[85%] w-[90%] mx-auto flex flex-col gap-4
            ${locale === 'en' ? 'md:flex-row' : "md:flex-row-reverse"}
            `}>
                <div className={`flex-1 
                ${locale === 'en' ? "text-left" : "text-right" }
                `}>
                    <h3 className='md:text-4xl text-3xl font-semibold'>
                        {t("announcements.mainHeading")}
                    </h3>
                    <p className='text-grayText my-6'>
                    {t("announcements.subHeading")}
                    </p>
                    <ul className='flex flex-col gap-4 sm:text-base text-sm'>
                        <li className={`flex items-center gap-4
                        ${locale === 'en' ? "flex-row" : "flex-row-reverse" }
                        `}>
                            <img src="/svgs/tickCircle.svg" alt="Tick Circle" />
                            <p>{t("announcements.li1")}</p>
                        </li>
                        <li className={`flex items-center gap-4
                        ${locale === 'en' ? "flex-row" : "flex-row-reverse" }
                        `}>
                            <img src="/svgs/tickCircle.svg" alt="Tick Circle" />
                            <p>{t("announcements.li2")}</p>
                        </li>
                        <li className={`flex items-center gap-4
                        ${locale === 'en' ? "flex-row" : "flex-row-reverse" }
                        `}>
                            <img src="/svgs/tickCircle.svg" alt="Tick Circle" />
                            <p>{t("announcements.li3")}</p>
                        </li>
                        <li className={`flex items-center gap-4
                        ${locale === 'en' ? "flex-row" : "flex-row-reverse" }
                        `}>
                            <img src="/svgs/tickCircle.svg" alt="Tick Circle" />
                            <p>{t("announcements.li4")}</p>
                        </li>
                        <li className={`flex items-center gap-4
                        ${locale === 'en' ? "flex-row" : "flex-row-reverse" }
                        `}>
                            <img src="/svgs/tickCircle.svg" alt="Tick Circle" />
                            <p>{t("announcements.li5")}</p>
                        </li>
                        <li className={`flex items-center gap-4
                        ${locale === 'en' ? "flex-row" : "flex-row-reverse" }
                        `}>
                            <img src="/svgs/tickCircle.svg" alt="Tick Circle" />
                            <p>{t("announcements.li6")}</p>
                        </li>
                    </ul>
                    <div className={`mt-8
                    ${locale === 'en' ? "flex justify-start" : "flex justify-end" }
                    `}>
                        <button className="btn-secondary flex items-center gap-2">
                            <span>{t("announcements.viewMore")}</span>
                            <img src="/svgs/rightAngle.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className='flex-1 flex items-end md:justify-end justify-center md:pt-0 pt-12 '
                ref={announcementsImgRef}
                >
                    <img src="/images/announcement.png" alt="Announcements" />
                </div>
            </div>
        </div>
    )
}

export default Announcements