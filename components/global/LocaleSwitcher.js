import { useRouter } from 'next/router';
import React from 'react'

const LocaleSwitcher = ({ smHide }) => {

    const { push , locale , locales } = useRouter();

    const handleLangChange = (e) => {

        push("#" , undefined , {
            locale : e.target.value
        });
    }
    
    return (
        <select className={`border font-semibold rounded-md px-4 text-base  py-[2px] outline-none translate-y-[1px] ${smHide ? "sm:block hidden" : ""}`}
            onChange={handleLangChange}
            >
                {
                    locales.map((loc,i) => (
                        <option value={loc} selected={loc === locale} key={i}>
                            {loc === "en" ? "Eng" : "العربيه"}
                        </option>
                    ))
                }
            {/* <option value="ar">العربيه</option>
            <option value="en">Eng</option> */}
        </select>
    )
}

export default LocaleSwitcher