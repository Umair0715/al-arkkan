import About from 'components/home/About'
import Acc from 'components/home/AccordionComp'
import Announcements from 'components/home/Announcements'
import Contact from 'components/home/Contact'
import Courses from 'components/home/Courses'
import Facilities from 'components/home/Facilities'
import Faq from 'components/home/Faq'
import Hero from 'components/home/Hero'
import JoinUs from 'components/home/JoinUs'
import Services from 'components/home/Services'
import { useRouter } from 'next/router';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from 'react'
import Footer from 'components/global/footer'



export default function Home() {
    const { t } = useTranslation('home');
    const { t : tCourse } = useTranslation('courses');
    const { push } = useRouter();

    // useEffect(() => {
    //     push('/' , undefined , {
    //         locale : 'en'
    //     });
    // }, [])

    return (
        <div>
            <section>
                <Hero t={t} />
            </section>
            <section>
                <Services t={t} heading={t("services.whatWeDo")}/>
            </section>
            <section>
                <Facilities t={t} />
            </section>
            <section>
                <About t={t} />
            </section>
            <section>
                <JoinUs t={t} />
            </section>
            <section id='services'>
                <Services t={t} heading={t("services.heading")}/>
            </section>
            <section>
                <Courses t={tCourse} />
            </section>
            <section>
                <Announcements t={t} />
            </section>
            <section>
                <Faq t={t} />
            </section>
            <section id='contact'>
                <Contact t={t} />
            </section>
            <footer>
                <Footer t={t} />
            </footer>
        </div>
    )
}


export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home" , "courses"])),
        },
    };
}
