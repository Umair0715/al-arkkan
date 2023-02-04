import { useDrawerContext } from 'context/drawerContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react'
import LocaleSwitcher from '../LocaleSwitcher';
import Logo from '../Logo';
import styles from './nav.module.css';

const Navbar = () => {  
    const { setShowDrawer} = useDrawerContext();
    const headerRef = useRef(null);

    const handleScroll=() => {
        const offset = window.scrollY;
        if(offset > 150 ){
            headerRef?.current?.classList?.add(styles.pure)
        }
        else{
            headerRef?.current?.classList?.remove(styles.pure)
        }
      }
    
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    });

    const { push , locale , locales } = useRouter();

    const handleLangChange = (e) => {

        push("#" , undefined , {
            locale : e.target.value
        });
    }
     

    return (
        <div className='fixed top-0 left-0 w-full z-[99] sm:bg-pure bg-primary ' ref={headerRef}>
            <div className='flex items-center justify-between lg:w-[85%] w-[97%] mx-auto py-4'>
                <div className='flex items-center gap-6'>
                    <div onClick={() => setShowDrawer(true)} className='cursor-pointer w-fit' >
                        <img src="/svgs/menu.svg" alt="Hamburger" className={styles.hamburger} />
                    </div>
                    <div>
                        <LocaleSwitcher smHide/>
                    </div>
                    {/* <select className='border font-semibold rounded-md px-4 text-base  py-[2px] outline-none translate-y-[1px] sm:block hidden'
                    onChange={handleLangChange}
                    >
                        <option value="ar">العربيه</option>
                        <option value="en">Eng</option>
                    </select> */}
                </div>
                <Link href='/'>
                    <div className='translate-y-0.5 sm:block hidden'>
                        <Logo />
                    </div>
                    <div className='translate-y-0.5 sm:hidden block '>
                        <Logo white={true}/>
                    </div>
                </Link>
                <div className='sm:flex hidden items-center gap-6'>
                    <Link href='/auth/login'>
                        <button className='btn-secondary'>
                            {locale === 'en' ? "Log In" : "تسجيل الدخول"}
                        </button>
                    </Link>
                    <Link href='/auth/register'>
                        <button className='btn-primary'>
                            {locale === 'en' ? "Register" : "يسجل" }
                        </button>
                    </Link>
                </div>
                <div className='sm:hidden flex items-center gap-6'>
                    <Link href='/auth/login'>
                        <button className='btn-white nav'>Account</button>
                    </Link>
                    
                    
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;