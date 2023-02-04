import Link from 'next/link'
import { useRouter } from 'next/router'

const Footer = ({ t }) => {
    const router = useRouter();

    const isActivePath = path => {
        return router.pathname.split('/').includes(path);
    }

    return (
        <div>
            <div className='w-full sm:h-[70vh] h-full relative pb-20'
                style={{
                    background : 'url(/images/footerBg.png)',
                    // backgroundSize : 'cover'
                    backgroundPosition : 'center center'
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#000000be]"></div>
                <div className='lg:w-[60%] md:w-[80%] sm:w-[90%] w-[95%] mx-auto pt-28 pb-16 relative z-20'>
                    <div className='sm:px-8'>
                        <div className='flex items-center gap-2 font-semibold text-lg text-pure'>
                            <img src="/svgs/whiteLogo.svg" alt="White Logo" />
                            <p>LOGO</p>
                        </div>
                        <ul className='mt-20 text-pure font-semibold flex  sm:flex-nowrap flex-wrap items-center justify-between pb-8 sm:text-base text-sm'>
                            <li className={`${router.pathname === '/' ? 'text-primary' : ''} hover:text-primary duration-200`}>
                                <Link href='/'>
                                    {t("footer.home")}
                                </Link>  
                            </li>
                            <li className={`${isActivePath('services') ? 'text-primary' : ''} hover:text-primary duration-200 sm:block hidden`}>
                                <Link href='/#services'>
                                    {t("footer.services")}    
                                </Link>  
                            </li>
                            <li className={`${isActivePath('about')  ? 'text-primary' : ''} hover:text-primary duration-200`}>
                                <Link href='/about'>
                                    {t("footer.aboutUs")}    
                                </Link>  
                            </li>
                            <li className={`${isActivePath('facilities') ? 'text-primary' : ''} hover:text-primary duration-200 sm:block hidden`}>
                                <Link href='/facilities'>
                                    {t("footer.ourFacilities")}
                                </Link>  
                            </li>
                            <li className={`${isActivePath('faq') ? 'text-primary' : ''} hover:text-primary duration-200`}>
                                <Link href='/faq'>{t("footer.faqs")}</Link>  
                            </li>
                            <li>
                                <Link href='/facilities'>
                                    <button className="btn-primary">
                                        {t("footer.siteMap")}
                                    </button>
                                </Link>
                            </li>


                        </ul>
                    </div>
                    <div className='flex sm:flex-row flex-col gap-6 items-center justify-between border-t border-b-gray-400 pt-8 text-sm'>
                        <div className='flex items-center gap-4'>
                            <a href='https://facebook.com' target='_blank' className='duration-300 hover:-translate-y-2 cursor-pointer'>
                                <img src="/svgs/facebook.svg" alt="Facebook" />
                            </a>
                            <a href='https://snapchat.com' target='_blank' className='duration-300 hover:-translate-y-2 cursor-pointer'>
                                <img src="/svgs/snapchat.svg" alt="Snapchat" />
                            </a>
                            <a href='https://instagram.com' target='_blank' className='duration-300 hover:-translate-y-2 cursor-pointer'>
                                <img src="/svgs/instagram.svg" alt="Instagram" />
                            </a>
                            <a href='https://be.com' target='_blank' className='duration-300 hover:-translate-y-2 cursor-pointer'>
                                <img src="/svgs/be.svg" alt="Be" />
                            </a>
                        </div>
                        <div className='text-white md:text-base sm:text-sm text-xs'>
                            <p>Al Arkan Training Center ©2023 ALL RIGHT RESERVED</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer