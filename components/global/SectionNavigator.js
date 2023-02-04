import Link from 'next/link'
import { useRouter } from 'next/router'


const SectionNavigator = ({ items }) => {
    const { locale } = useRouter();

    return (
        <div className={`flex items-cener gap-4
        ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
        `}>
            {
                items?.map((item , i) => (
                    <div key={i} className={`flex items-center gap-4 
                    ${locale === 'en' ? "flex-row" : "flex-row-reverse"}
                    `}>
                        <Link 
                        href={`/${item.url}`} 
                        className={`font-medium ${items.length - 1 === i ? 'text-black' : 'text-primary'} `}
                        >
                            {item.name}
                        </Link>
                        {
                            items.length - 1 !== i && 
                            <img src="/svgs/right.svg" alt="Right Angle" 
                            className={`${locale === 'en' ? "0" : "rotate-[180deg]" }`}
                            /> 
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default SectionNavigator