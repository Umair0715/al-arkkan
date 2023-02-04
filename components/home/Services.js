import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Services = ({ t , heading }) => {
    useEffect(() => {
        gsap.fromTo('.services' , 
        { y : "20%" , opacity : 0 } , { y : 0 , opacity : 1 , duration : 1  , 
            scrollTrigger : {
                trigger : '.services' , 
                start : 'top 70%'
            }
        })
    }, [])

    return (
        <div className='py-20'>
            <div className='text-center'>
                <h3 className='md:text-4xl text-3xl font-bold'>
                    {heading}
                </h3>
                <p className='text-grayText mt-6 sm:px-0 px-6'>
                {t("services.subHeading")}
                </p>
            </div>
            <div className='services flex md:flex-row flex-col items-center justify-center pt-16 gap-12 w-full '>
                <div className='w-[250px] text-center flex flex-col gap-3'>
                    <div className='flex items-center justify-center'>
                        <img src="/svgs/training.svg" alt="Training Programs" />
                    </div>
                    <h5 className='text-xl font-semibold'>{t("services.trainingPrograms")}</h5>
                    <p className='text-grayText'>{t("services.trainingProgramsP")}</p>
                </div>
                <div className='w-[250px] text-center flex flex-col gap-3 -translate-y-2.5'>
                    <div className='flex items-center justify-center'>
                        <img src="/svgs/trainers.svg" alt="Training Programs" />
                    </div>
                    <h5 className='text-xl font-semibold'>
                        {t("services.experiencedTrainers")}
                    </h5>
                    <p className='text-grayText'>
                        {t("services.experiencedTrainersP")}
                    </p>
                </div>
                <div className='w-[250px] text-center flex flex-col gap-3 -translate-y-1'>
                    <div className='flex items-center justify-center'>
                        <img src="/svgs/accreditation.svg" alt="Training Programs" />
                    </div>
                    <h5 className='text-xl font-semibold'>
                        {t("services.accreditation")}
                    </h5>
                    <p className='text-grayText'>
                        {t("services.accreditationP")}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services