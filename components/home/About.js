import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger)


const About = ({ t }) => {
    const aboutLeftRef = useRef(null);

    useEffect(() => {
        const el = aboutLeftRef.current;
        gsap.fromTo( el , 
        { x : "-20%" , opacity : 0 } , { x : 0 , opacity : 1 , duration : 1  , 
            scrollTrigger : {
                trigger : el , 
                start : 'top 70%'
            }
        })
    }, [])

    return (
        <div className='flex md:flex-row flex-col-reverse justify-between gap-8 lg:w-[85%] w-[95%] mx-auto min-h-screen h-full sm:py-20 pt-8'>
            <div className=' flex-[0.45] md:pt-0 pt-8 flex md:justify-start justify-center' ref={aboutLeftRef}>
                <img src="/images/about.png" alt="" />
            </div>
            <div className='flex-[0.55]'>
                <div className='text-grayText'>
                    <h3 className='md:text-4xl text-3xl font-bold text-dark'>
                        {t("about.mainHeading")}
                    </h3>
                    <p className='py-6'>
                        {t("about.knowMore")}    
                    </p>
                    <p>{t("about.aboutSm")}</p>
                </div>
                <div className='mt-8 flex flex-col gap-8'>
                    <div className='flex gap-2'>
                        <div className='flex-[0.15]'>
                            <div className='bg-lightBlue flex items-center justify-center sm:w-[80px] w-[70px] sm:h-[80px] h-[70px] rounded-full'>
                                <img src='/svgs/vision.svg' alt='Vision' />
                            </div>
                        </div>
                        <div className='flex-[0.85]'>
                            <h6 className='md:text-[24px] text-xl font-semibold'>
                                {t("about.ourVision")}
                            </h6>
                            <p className='mt-2 text-gray-800 sm:text-base text-sm'>
                                {t("about.ourVisionP")}    
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex-[0.15]'>
                            <div className='bg-lightBlue flex items-center justify-center sm:w-[80px] w-[70px] sm:h-[80px] h-[70px] rounded-full'>
                                <img src='/svgs/mission.svg' alt='Vision' />
                            </div>
                        </div>
                        <div className='flex-[0.85]'>
                            <h6 className='md:text-[24px] text-xl font-semibold'>
                                {t("about.ourMission")}
                            </h6>
                            <p className='mt-2 text-gray-800 sm:text-base text-sm'>
                                {t("about.ourMissionP")}
                            </p>
                            <div className='mt-8'>
                                <Link href='/about' className="btn-secondary w-fit flex gap-2" style={{
                                    padding: '8px 1rem'
                                }}>
                                    <span>{t("about.viewMore")}</span>
                                    <img src="/svgs/rightAngle.svg" alt="view more" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About