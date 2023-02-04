import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from 'gsap';


const Hero = ({ t }) => {


    useEffect(() => {
        gsap.fromTo('.hero-left' ,
        { x : "30%" , opacity : 0 } , { x : 0 , opacity : 1 , duration : 1 , delay : 0.5 })
    }, [])
    return (
        <div>
            <div className='w-[95%] lg:w-[85%] h-full pb-12 md:pt-0 pt-20 mx-auto flex md:flex-row flex-col items-center justify-between gap-8'>
                <div className='flex-1 flex flex-col relative'>
                    <h1 className='lg:text-[56px] md:text-[45px] sm:text-[40px] text-[36px] font-bold leading-[1.3]'>{t("hero.weAre")}<span className='text-primary'> {t("hero.alArkkan")} </span> 
                     {t("hero.trainingCenter")}
                    </h1>
                    <p className='text-grayText py-6'>{t("hero.p1")} <br /> {t("hero.p2")} </p>
                    <Link href='/#contact' className='mt-2'>
                        <button className='btn-primary'>{t("hero.getInTouch")}</button>
                    </Link>
                    <div className='flex items-center md:gap-20 sm:gap-12 gap-8 mt-20 text-center'>
                        <div>
                            <p className='text-3xl font-bold'>350+</p>
                            <span className='text-grayText text-sm'>{t("hero.exams")}</span>
                        </div>
                        <div>
                            <p className='text-3xl font-bold'>24+</p>
                            <span className='text-grayText text-sm'>{t("hero.corporate")}</span>
                        </div>
                        <div>
                            <p className='text-3xl font-bold'>521+</p>
                            <span className='text-grayText text-sm'>{t("hero.student")}</span>
                        </div>
                    </div>
                    <img className='absolute right-0 -z-10 -bottom-20 w-[90%]' src="/svgs/liner.svg" alt="Vector lines" />
                </div>
                <div className='hero-left opacity-0 flex-1 pt-[80px] flex justify-end'>
                    <div className="relative">
                        <Image 
                        src="/images/hero.png" 
                        width={510} 
                        height={510} 
                        alt='Hero img' 
                        className="relative z-10"
                        />
                        <Image 
                        src='/images/primaryGradient.png'
                        width={510}
                        height={510}
                        alt='Gradient'
                        className="absolute right-0 bottom-0 z-20"
                        />
                        <img src="/images/gradient1.png" alt="Gradient" 
                        className="absolute right-[80%] top-[10%]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Hero;




