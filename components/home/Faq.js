import AccordionComp from "./AccordionComp";
import { faqData } from "data/faqData";



const Faq = ({ t }) => {

    return (
        <div className='py-16'>
            <div className='text-center'>
                <h3 className='text-4xl font-semibold'>
                    {t("faq.mainHeading")}
                </h3>
                <p className='text-grayText mt-4'>
                    {t("faq.subHeading")}
                </p>
            </div>
            <div className="lg:w-1/2 md:w-[65%] sm:w-[75%] w-[90%] mx-auto mt-8 flex flex-col gap-4">
                {
                    faqData?.slice(0,4).map((item , i) => (
                        <AccordionComp 
                        title={t(`faq.q${i+1}`)} 
                        content={t(`faq.ans${i+1}`)} 
                        key={item.id}
                        />
                    ))
                }
            </div>

        </div>
    )

}

export default Faq