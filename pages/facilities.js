import Footer from 'components/global/footer';
import SectionHeader from 'components/global/sectionHeader'
import SectionNavigator from 'components/global/SectionNavigator';
import { facilitiesData } from 'data/facilitiesData';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const navigationItems = [
    { 
        name : 'Home',
        url : '/'
    } ,
    {
        name : 'Facilities',
        url : '/facilities'
    }
]

const Facilities = () => {
    const [data , setData] = useState(facilitiesData)
    const [activeBranch , setActiveBranch] = useState(data[0]);
    const { t } = useTranslation('home');
    const { locale } = useRouter();

    const handleCityChange = e => {
        if(e.target.value === 'all') {
            setData(facilitiesData);
            return;
        }
        setData(prev => facilitiesData.filter(d => d.city === Number(e.target.value)))
    }

    useEffect(() => {
        setActiveBranch(data[0])
    }, [data])

    const handleTypeChange = e => {
        if(e.target.value === 'all') {
            setData(facilitiesData);
            return;
        }
        setData(prev => facilitiesData.filter(d => d.type === Number(e.target.value)))
    }

    return (
        <div className=''>
            <div>
                <SectionHeader heading={locale === 'en' ? "Our Facilities" : "منشأتنا"}/>
            </div>
            <div className='py-12  lg:w-[70%] md:w-[90%] w-[95%] mx-auto'>
                <div>
                    <SectionNavigator items={navigationItems} />
                </div>
            </div>
            <div className='lg:w-[80%] w-[95%] mx-auto flex md:flex-row flex-col gap-8 pb-20'>
                <div className='flex-1'>
                    <div className='flex items-center sm:gap-6 gap-3 justify-end sm:text-base text-sm'>
                        <div className='border py-2 sm:px-4 px-2 rounded-md flex items-center sm:gap-6 gap-3 font-semibold'>
                            <label >
                                {locale === 'en' ? "Region" : "منطقة"}
                            </label>
                            <select className='border-transparent outline-none '
                            onChange={handleCityChange}>
                                <option value='all'>
                                    {locale === 'en' ? "All" : "الجميع"}
                                </option>
                                <option value={1}>
                                    {locale === 'en' ? "City 1" : "المدينة 1"}
                                </option>
                                <option value={2}>
                                    {locale === 'en' ? "City 2" : "المدينة 2"}
                                </option>
                                <option value={3}>
                                    {locale === 'en' ? "City 3" : "المدينة 3"}
                                </option>
                            </select>
                        </div>
                        <div className='border py-2 sm:px-4 px-2 rounded-md flex items-center sm:gap-6 gap-3 font-semibold'>
                            <label >
                                {locale === 'en' ? "Facility type" : "نوع المنشأة"}
                            </label>
                            <select className='border-transparent outline-none'
                            onChange={handleTypeChange}>
                                <option value='all'>
                                    {locale === 'en' ? "All" : "الجميع"}
                                </option>
                                <option value={1}>
                                    {locale === 'en' ? "Type 1" : "اكتب 1"}
                                </option>
                                <option value={2}>
                                    {locale === 'en' ? "Type 2" : "اكتب 2"}
                                </option>
                                <option value={3}>
                                    {locale === 'en' ? "Type 3" : "اكتب 3"}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-4 flex flex-col gap-2'>
                    {
                        data?.map(item => (
                            <div 
                            key={item?.id} 
                            className={`${activeBranch?.id === item?.id ? 'bg-primary' : 'bg-lightBlue text-dark'} py-4 px-4 text-pure font-medium w-full rounded-md cursor-pointer`}
                            onClick={() => setActiveBranch(item)}
                            >
                                {item?.[`${locale}`].branchName}
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className='flex-1'>
                    <div>
                        <iframe src={activeBranch?.mapUrl} width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='border-l-4 border-primary pl-4 mt-8'>
                        <div className='flex items-center gap-4'>
                            <h6 className='text-xl font-bold'>
                                {activeBranch[`${locale}`].branchName}
                            </h6>
                            <div className='bg-lightBlue text-xs text-primary py-1 px-2 rounded-md'>{activeBranch.branchType}</div>
                        </div>
                        <div className='my-4 flex items-center gap-2'>
                            <img src="/svgs/smMap.svg" alt="Map Svg" />
                            <p className='text-sm text-grayText'>
                                {activeBranch[`${locale}`].branchAddress}
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src="/svgs/smPhone.svg" alt="Phone Svg" />
                            <p className='text-sm text-grayText'>
                                {activeBranch.branchContact}
                            </p>
                        </div>
                    </div>
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

export default Facilities