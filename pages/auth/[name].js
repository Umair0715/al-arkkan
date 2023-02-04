import Login from 'components/auth/Login';
import Register from 'components/auth/Register';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router'
import React from 'react'

const Auth = () => {
    const router = useRouter();
    const { t }  = useTranslation('auth');
    const { locale } = router;

    return (
        <div className='w-full pb-20 h-full '>
            <div className='lg:w-[80%] w-[95%] h-full mx-auto flex justify-center gap-8 pt-20'>
                <div className='flex-1 md:block hidden'>
                    <img src="/images/auth.png" alt="Auth" className='w-[80%]'/>
                </div>
                <div className='flex-1'>
                    <div className={`flex items-center gap-12
                    ${locale === 'en' ? "justify-start" : "justify-end"}
                    `}>
                        {
                            ['Login' , 'Register'].map((item , i) => (
                                <div className={`font-semibold text-xl cursor-pointer
                                ${router.query.name === item.toLocaleLowerCase() ? 'text-primary relative after:content-[""] after:absolute after:-bottom-3 after:left-0 after:w-full after:h-[5px] after:bg-primary' : ''} `} 
                                key={i}
                                onClick={() => router.push(`/auth/${item.toLocaleLowerCase()}`)}
                                >
                                    {item === 'Login' ? t("login.title") : t("register.title")}
                                </div>
                            ))
                        }
                    </div>
                    <div className='mt-12'>
                        {
                            router.query.name === 'login'
                            ? 
                                <Login t={t} />
                            :
                                <Register t={t} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;


export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["auth"])),
        },
    };
}