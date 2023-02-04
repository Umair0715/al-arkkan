import SectionHeader from 'components/global/sectionHeader'
import SectionNavigator from 'components/global/SectionNavigator';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';





const AnnouncementsDetails = () => {
    const router = useRouter();
    const { locale } = useRouter();
    const navigationItems = [
        { 
            name : locale === 'en' ? 'Home' : "بيت",
            url : '/'
        } ,
        {
            name : locale === 'en' ? "Announcements" : "الإعلانات" ,
            url : '/announcements'
        } ,
        {
            name : router.query.slug ,
            url : `/announcements/${router.query.slug}`
        }
    ]

    const { t } = useTranslation('announcements');

    return (
        <div className='pb-20'>
            <div>
                <SectionHeader heading={`${router.query.slug}`}/>
            </div>
            <div className='py-12  lg:w-[70%] md:w-[90%] w-[95%] mx-auto'>
                <div>
                    <SectionNavigator items={navigationItems} />
                </div>
            </div>
            <div className='lg:w-[80%] w-[95%] mx-auto'>
                <div>
                    <img 
                    src="/images/iso.png" 
                    alt="Ison" 
                    className='w-full h-[300px] rounded-[30px] object-cover'
                    />
                </div>
                <div className={`mt-8  border-primary
                ${locale === 'en' ? "border-l-4 pl-4 text-left" : "border-r-4 pr-4 text-right" }
                `}>
                    <h3 className='text-2xl font-bold'>{router.query.slug}</h3>
                    <p className='text-sm text-grayText mt-6'>
                        {t("ann.date")}
                    </p>
                </div>
                <div className={`flex lg:gap-20 gap-8 mt-12  flex-col
                ${locale === 'en' ? "md:flex-row " : "md:flex-row-reverse"}
                `}>
                    <div className={`flex-1 text-[15px]
                    ${locale === 'en' ? "text-left" : "text-right"}
                    `}>
                        <p>
                            {t("ann.descLg")}
                        </p>
                    </div>
                    <div className={`flex-1 flex md:items-end items-center md:justify-end 
                    
                    `}>
                        <div className='w-[400px] bg-lightBlue py-4 sm:px-4 px-2 rounded-lg'>
                            <h6 className={`text-lg font-bold
                            ${locale === 'en' ? 'text-left' : "text-right"}
                            `}>
                                {t("ann.otherAnnouncements")}
                            </h6>
                            <div className={`flex flex-col gap-3 mt-6 
                            ${locale === 'en' ? 'text-left' : "text-right"}
                            `}>
                                {
                                    [...Array(3).keys()].map((item , i) => (
                                        <div key={i} className='flex gap-2'>
                                            <div className='flex-[0.35]'>
                                                <img src="/images/iso.png" alt="ISO" className='rounded-[10px]'/>
                                            </div>
                                            <div className='flex-[0.65]'>
                                                <Link href={`/announcements/${locale === 'en' ? "Al Arkkan Training Center is an acknowledged" : "مركز أركان للتدريب معترف به"}`}>
                                                    <p className='font-semibold'>
                                                    {t("ann.otherTitle")}
                                                    </p>
                                                    <p className='text-grayText text-sm mt-4'>
                                                        {t("ann.date")}
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnnouncementsDetails;


export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["announcements"])),
        },
    };
}