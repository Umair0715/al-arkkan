import "react-accordion-comp/dist/styles.css";

import React, { useState } from 'react';
import Accordion from "react-accordion-comp";

const AccordionComp = ({ title , content }) => {
    const [flag, setFlag] = useState(false);

    return (
        <div>
            <div onClick={()=>setFlag(!flag)} className='bg-lightBlue py-4 px-4 flex items-center justify-between cursor-pointer'>
                <h6 className="flex-[0.9]">{title}</h6>
                <div className="flex-[0.1] flex items-end justify-end">
                    <img src={`/svgs/${flag ? 'minus.svg' : 'plus.svg'}`} alt="" />
                </div>
            </div>
            <Accordion isOpen={flag}>
                <p className="bg-pure py-4 px-4 sm:text-base text-sm">
                    {content}
                </p>
            </Accordion>
        </div>
    )
}

export default AccordionComp;