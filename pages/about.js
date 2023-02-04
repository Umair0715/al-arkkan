import Footer from 'components/global/footer';
import SectionHeader from 'components/global/sectionHeader'
import SectionNavigator from 'components/global/SectionNavigator'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from 'next/router';




const About = () => {
    const { t } = useTranslation('about');
    const { t : homeT } = useTranslation('home');
    const { locale } = useRouter();

    const navigationItems = [
        { 
            name : locale === 'en' ? 'Home' : "بيت",
            url : '/'
        } ,
        {
            name : locale === 'en' ? 'About' : "معلومات" ,
            url : '/about'
        }
    ]

    return (
        <div>
            <div>
                <SectionHeader heading={locale === 'en' ? "About Us" : "معلومات عنا" } />
            </div>
            <div className='pt-12 pb-28  lg:w-[70%] md:w-[90%] w-[95%] mx-auto'>
                <div>
                    <SectionNavigator items={navigationItems} />
                </div>
                <div className={`mt-20
                ${locale === 'en' ? "text-left" : "text-right"}
                `}>
                    <div className={` border-primary 
                    ${locale === 'en' ? "text-left border-l-4 pl-6" : "text-right border-r-4 pr-6" }
                    `}>
                        <h1 className='md:text-4xl text-3xl font-semibold'>
                            {t("about.mainHeading")}
                        </h1>
                        <p className='text-grayText mt-8'>
                        {t("about.knowMore")}
                        </p>
                    </div>
                    <div className='mt-12'>
                        <p className='sm:text-lg text-base'>
                        {t("about.aboutLg")}
                        </p>
                    </div>
                    <ul className={`flex flex-col gap-4 mt-12 
                    ${locale === 'en' ? "text-left" : "text-right"}
                    `}>
                        <li className={`flex gap-4
                        ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                        `}>
                            <img src="/svgs/tickCircle.svg" alt="Tick Circle" className='-translate-y-2'/>
                            <p>{t("about.li1")}</p>
                        </li>
                        <li className={`flex gap-4
                        ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                        `}>
                            <img src="/svgs/tickCircle.svg" alt="Tick Circle" className='translate-y-[2px]'/>
                            <p>
                            {t("about.li2")}
                            </p>
                        </li>
                        <li className={`flex gap-4
                        ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                        `}>
                            <img src="/svgs/tickCircle.svg" alt="Tick Circle" />
                            <p>{t("about.li3")}</p>
                        </li>
                        <li className={`flex gap-4
                        ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                        `}>
                            <img src="/svgs/tickCircle.svg" alt="Tick Circle" />
                            <p>{t("about.li4")}</p>
                        </li>
                        
                    </ul>
                    <div>
                    <div className={`mt-12 flex flex-col gap-8 
                    ${locale === 'en' ? "text-left" : "text-right"}
                    `}>
                        <div className={`flex gap-4
                        ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                        `}>
                            <div className=''>
                                <div className='bg-lightBlue flex items-center justify-center sm:w-[80px] w-[60px] sm:h-[80px] h-[60px] rounded-full'>
                                    <img src='/svgs/vision.svg' alt='Vision' className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]' />
                                </div>
                            </div>
                            <div className='md:flex-[0.8] flex-1'>
                                <h6 className='text-[24px] font-semibold'>
                                    {t("about.ourVision")}
                                </h6>
                                <p className='mt-2 text-gray-800'>
                                    {t("about.ourVisionP")}
                                </p>
                            </div>
                        </div>
                        <div className={`flex gap-4
                        ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                        `}>
                            <div>
                                <div className='bg-lightBlue flex items-center justify-center sm:w-[80px] w-[60px] sm:h-[80px] h-[60px] rounded-full'>
                                    <img src='/svgs/mission.svg' alt='Vision' className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]' />
                                </div>
                            </div>
                            <div className='md:flex-[0.8] flex-1'>
                                <h6 className='text-[24px] font-semibold'>
                                    {t("about.ourMission")}
                                </h6>
                                <p className='mt-2 text-gray-800'>
                                    {t("about.ourMissionP")}
                                </p>
                            </div>
                        </div>
                        <div className={`flex gap-4
                        ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                        `}>
                            <div>
                                <div className='bg-lightBlue flex items-center justify-center sm:w-[80px] w-[60px] sm:h-[80px] h-[60px] rounded-full'>
                                    <img src='/svgs/download.svg' alt='Vision' className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]' />
                                </div>
                            </div>
                            <div className='md:flex-[0.8] flex-1'>
                                <h6 className='text-[24px] font-semibold'>
                                    {t("about.theApproach")}
                                </h6>
                                <p className='mt-2 text-gray-800'>
                                    {t("about.theApproachP")}
                                </p>
                               
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className='mt-20 flex sm:flex-row flex-col justify-center items-center gap-8'>
                    <div className={`bg-pure rounded-lg lightShadow py-6 px-6 sm:w-[350px] w-[300px] 
                    ${locale === 'en' ? "text-left" : "text-right"}
                    `}>
                        <div className={`flex 
                        ${locale === 'en' ? "justify-start" : "justify-end"}`
                        }>
                            <img src="/svgs/headphone.svg" alt="Svg" className='sm:w-[90px] w-[60px]' />
                        </div>
                        <h3 className='mt-6 text-xl font-bold'>
                            {t("about.prod&Serv.mainHeading")}
                        </h3>
                        <ul className='mt-6 flex flex-col gap-4 text-sm'>
                            <li className={`flex gap-2
                            ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                            `}>
                                <div className='w-[6px] h-[4px] rounded-full bg-black mt-2'></div>
                                <div className=''>
                                {t("about.prod&Serv.li1")}
                                </div>
                            </li>
                            
                            <li className={`flex gap-2
                            ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                            `}>
                                <div className='w-[6px] h-[4px] rounded-full bg-black mt-2'></div>
                                <div>{t("about.prod&Serv.li2")}</div>    
                            </li>
                            <li className={`flex gap-2
                            ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                            `}>
                                <div className='w-[5px] h-[4px] rounded-full bg-black mt-2'></div>
                                <div>{t("about.prod&Serv.li3")}</div>    
                            </li>
                            <li className={`flex gap-2
                            ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                            `}>
                                <div className='w-[4px] h-[4px] rounded-full bg-black mt-2'></div>
                                <div>
                                    {t("about.prod&Serv.li4")}    
                                </div>    
                            </li>
                           
                        </ul>
                        
                    </div>
                    <div className={`bg-primary rounded-lg lightShadow py-6 px-6 sm:w-[350px] w-[300px] text-pure
                    ${locale === 'en' ? "text-left" : "text-right" }
                    `}>
                        <div className={`flex 
                        ${locale === 'en' ? "justify-start" : "justify-end"}`
                        }>
                            <img src="/svgs/accreditationWhite.svg" alt="Svg" 
                            className='sm:w-[90px] w-[60px]'/>
                        </div>
                        <h3 className='mt-6 text-xl font-bold'>
                        {t("about.cieh.mainHeading")}
                        </h3>
                        <ul className='mt-6 flex flex-col gap-4 text-sm'>
                            <li className={`flex gap-2
                            ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                            `}>
                                <div className='w-[6px] h-[4px] rounded-full bg-pure mt-2'></div>
                                <div className=''>
                                    {t("about.cieh.li1")}
                                </div>
                            </li>
                            
                            <li className={`flex gap-2
                            ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                            `}>
                                <div className='w-[6px] h-[4px] rounded-full bg-pure mt-2'></div>
                                <div>
                                    {t("about.cieh.li2")}
                                </div>    
                            </li>
                            <li className={`flex gap-2
                            ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                            `}>
                                <div className='w-[5px] h-[4px] rounded-full bg-pure mt-2'></div>
                                <div>
                                    {t("about.cieh.li3")}
                                </div>    
                            </li>
                            <li className={`flex gap-2
                            ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                            `}>
                                <div className='w-[4px] h-[4px] rounded-full bg-pure mt-2'></div>
                                <div>
                                {t("about.cieh.li4")}    
                                </div>    
                            </li>
                           
                        </ul>
                        
                    </div>
                </div>
            </div>
            <footer>
                <Footer t={homeT} />
            </footer>
        </div>
    )
}

export default About;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home" , "about"])),
        },
    };
}
