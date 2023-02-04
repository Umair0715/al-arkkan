import Footer from 'components/global/footer'
import SectionHeader from 'components/global/sectionHeader'
import SectionNavigator from 'components/global/SectionNavigator'
import AccordionComp from 'components/home/AccordionComp'
import { faqData } from 'data/faqData'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { useRouter } from 'next/router'



const Faqs = () => {
    const { t } = useTranslation('home');
    const { locale } = useRouter();

    const navigationItems = [
        { 
            name : locale === 'en' ? 'Home' : "بيت",
            url : '/'
        } ,
        {
            name : locale === 'en' ? "FAQs" : "أسئلة وأجوبة" ,
            url : '/faq'
        }
    ]

    return (
        <div>
            <div>
                <SectionHeader heading={locale === 'en' ? "FAQs" : "أسئلة وأجوبة"} />
            </div>
            <div className='py-12 lg:w-[70%] md:w-[90%] w-[95%] mx-auto'>
                <div>
                    <SectionNavigator items={navigationItems} />
                </div>
            </div>
            <div className="lg:w-1/2 md:w-[75%] sm:w-[85%] w-[95%]  mx-auto pt-8 pb-20 flex flex-col gap-4">
                {
                    faqData?.map((item , i) => (
                        <AccordionComp
                        title={t(`faq.q${i+1}`)} 
                        content={t(`faq.ans${i+1}`)} 
                        key={item.id}
                        />
                    ))
                }
                <div className='pt-8 flex items-center gap-1'>
                    <p>{t("faq.rightAns")}</p> 
                    <Link href='/contact' className='text-primary underline font-semibold'>
                        {t("faq.contactUs")}
                    </Link>
                </div>
            </div>
            <fooer>
                <Footer t={t} />
            </fooer>
        </div>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}

export default Faqs