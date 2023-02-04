import { useDrawerContext } from 'context/drawerContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef } from 'react'
import useClickOutside from 'utils/clickOutside';
import LocaleSwitcher from '../LocaleSwitcher';
import Logo from '../Logo';
import styles from './drawer.module.css';

const Drawer = () => {
    const router = useRouter();
    const { locale } = router;
    const drawerRef = useRef(null);
    const { showDrawer , setShowDrawer } = useDrawerContext();

    const isActivePath = path => {
        return router.pathname.split('/').includes(path);
    }
    useClickOutside(drawerRef , () => setShowDrawer(false));
    console.log(showDrawer)
    return (
        <div className={`z-[9999] ${styles.drawer} 
        ${locale === 'en' ? styles.drawerLeft : styles.drawerRight}
        ${showDrawer ? styles.showDrawer : ''} 
        `} 
        ref={drawerRef} 
        >
            <div className={`flex justify-between
            ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
            `}>
                <div>
                    <Logo />
                </div>
                <div className='cursor-pointer' onClick={() => setShowDrawer(false)}>
                    <img src='/svgs/cross.svg' alt='Cross' className='w-[20px]' />
                </div>
            </div>
            <ul className={`${styles.drawerList} 
            ${locale === 'en' ? "text-left" : "text-right"}
            `}>
                <li className={`${ router.pathname === '/' ? styles.active : ''}`}>
                    <Link href='/' onClick={() => setShowDrawer(false)}>
                        {locale === 'en' ? "Home" : "بيت"}
                     </Link>
                </li>   
                <li className={`${isActivePath('about') ? styles.active : ''}`}>
                    <Link href='/about' onClick={() => setShowDrawer(false)}>
                        {locale === 'en' ? "About" : "معلومات عنا"}
                    </Link>
                </li>
                <li className={`${isActivePath('/services') ? styles.active : ''}`}>
                    <Link href='/#services' onClick={() => setShowDrawer(false)}>
                        {locale === 'en' ? "Services" : "خدمات"}
                    </Link>
                </li>
                <li className={`${isActivePath('facilities') ? styles.active : ''}`}>
                    <Link href='/facilities' onClick={() => setShowDrawer(false)}>
                        {locale === 'en' ? "Our Facilities" : "منشأتنا"}    
                    </Link>
                </li>
                <li className={`${isActivePath('announcements') ? styles.active : ''}`}>
                    <Link href='/announcements' onClick={() => setShowDrawer(false)}>
                        {locale === 'en' ? "Announcements" : "الإعلانات"}
                    </Link>
                </li>
                <li className={`${isActivePath('contact') ? styles.active : ''}`}>
                    <Link href='/contact' onClick={() => setShowDrawer(false)}>
                        {locale === 'en' ? "Contact" : "اتصال"}
                    </Link>
                </li>
                {/* <li className={`${isActivePath('/map') ? styles.active : ''}`}>
                    <Link href='/map' onClick={() => setShowDrawer(false)}>
                        Platform Map
                    </Link>
                </li> */}

                <li className={`${isActivePath('faq') ? styles.active : ''}`}>
                    <Link href='/faq' onClick={() => setShowDrawer(false)}>
                        {locale === 'en' ? "FAQs" : "أسئلة وأجوبة"}
                    </Link>
                </li>
                
            </ul>
            <div className='mt-20 flex items-center gap-8'>
                <div className='text-primary cursor-pointer w-fit'>
                    <Link href='/auth/login' onClick={() => setShowDrawer(false)}>
                        {locale === 'en' ? "Login" : "تسجيل الدخول"}
                    </Link>
                </div>
                <div className='text-primary cursor-pointer w-fit'>
                    <Link href='/auth/register' onClick={() => setShowDrawer(false)}>
                        {locale === 'en' ? "Register" :  "يسجل"}
                    </Link>
                </div>
                <div>
                    <LocaleSwitcher />
                </div>
            </div>
        </div>
    )
}

export default Drawer;