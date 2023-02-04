import SectionHeader from 'components/global/sectionHeader'
import SectionNavigator from 'components/global/SectionNavigator';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';


const navigationItems = [
    { 
        name : 'Home',
        url : '/'
    } ,
    {
        name : 'Announcements',
        url : '/announcements'
    }
]

const Announcements = () => {
    const { locale } = useRouter();
    const { t } = useTranslation('announcements')

    return (
        <div className='pb-20'>
            <div>
                <SectionHeader heading={locale === 'en' ? "Announcements" : "الإعلانات" }/>
            </div>
            <div className='py-12  lg:w-[70%] md:w-[90%] w-[95%] mx-auto'>
                <div>
                    <SectionNavigator items={navigationItems} />
                </div>
            </div>
            <div className='lg:w-[80%] w-[95%] mx-auto'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-9'>
                    {
                        [...Array(6).keys()].map((item ,i) => (
                            <div className='bg-pure rounded-lg lightShadow rounded-tl-[20px]
                            rounded-tr-[20px]'>
                                <div>
                                    <img src="/images/iso.png" alt="Iso" className='w-full h-auto rounded-tl-[20px]
                                    rounded-tr-[20px]' />    
                                </div>  
                                <div className='py-4 px-4 flex flex-col gap-4'>
                                    <h4 className='text-base font-bold'>
                                        {t("ann.title")}
                                    </h4>
                                    <p className='text-xs text-grayText'>
                                        {t("ann.date")}
                                    </p>
                                    <p className='text-sm '>
                                        {t("ann.desc")}
                                    </p>
                                    <Link href={`/announcements/Compliance with the ISO 9001 Standards`}>
                                        <div className='flex items-end justify-end'>
                                            <button className="btn-secondary">
                                                {t("ann.readMore")}
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='flex items-center justify-center mt-20 '>
                    <button className="btn-secondary">Load More</button>
                </div>
            </div>
                        


        </div>
    )
}

export default Announcements;


export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["announcements"])),
        },
    };
}