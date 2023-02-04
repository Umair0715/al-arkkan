import ContactForm from 'components/contactForm'
import Footer from 'components/global/footer';
import SectionHeader from 'components/global/sectionHeader'
import SectionNavigator from 'components/global/SectionNavigator';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const navigationItems = [
    { 
        name : 'Home',
        url : '/'
    } ,
    {
        name : 'Contact',
        url : '/contact'
    }
]

const contact = () => {
    const { t } = useTranslation('home');
    const { locale } = useRouter();
    

    return (
        <div>
            <div>
                <SectionHeader heading={locale === 'en' ? "Contact Us" : "اتصال" } />
            </div>
            <div className='py-12 lg:w-[70%] w-[95%] mx-auto'>
                <div>
                    <SectionNavigator items={navigationItems} />
                </div>
                <div className='pb-20 pt-6'>
                    <ContactForm t={t} />
                </div>
            </div>
            <footer>
                <Footer t={t} />
            </footer>
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

export default contact;