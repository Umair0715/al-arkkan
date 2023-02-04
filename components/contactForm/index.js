import InputField from 'components/global/InputField'
import React, { useState } from 'react'

const ContactForm = ({ t }) => {
    const [name , setName] = useState('');
    const [company , setCompany] = useState('');
    const [email , setEmail] = useState('');
    const [telephone , setTelephone] = useState('');
    const [content , setContent] = useState('');


    return (
        <div className='w-full min-h-[105vh] h-full overflow-hidden mx-auto flex md:flex-row flex-col gap-6 border mt-12 rounded-md rounded-bl-[100px] md:pt-20 pt-4 relative'>
            <div className='flex-[0.3] flex md:flex-col md:justify-start sm:justify-between justify-center md:items-center items-start flex-row gap-8 md:pt-0 pt-6 md:px-0 px-4 sm:flex-nowrap flex-wrap'>
                <div className='flex flex-col gap-2 items-center justify-center '>
                    <div className='bg-lightBlue sm:w-[80px] w-[50px] h-[50px] sm:h-[80px] rounded-md flex items-center justify-center'>
                        <img src="/svgs/phone.svg" alt="" className='md:w-[50px] sm:w-[40px] sm:h-[50px] w-[30px] h-[30px]'/>
                    </div>
                    <h6 className='text-primary sm:text-base text-sm font-medium'>
                        {t("contact.callUs")}
                    </h6>
                    <div className='text-black font-semibold sm:text-sm text-xs'>
                        <p>+966 (013) 846 0433</p>
                        <p>+966 (013) 846 0433</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-center justify-center '>
                    <div className='bg-lightBlue sm:w-[80px] w-[50px] h-[50px] sm:h-[80px] rounded-md flex items-center justify-center'>
                        <img className='md:w-[50px] sm:w-[40px] sm:h-[50px] w-[30px] h-[30px]' src="/svgs/email.svg" alt="" />
                    </div>
                    <h6 className='text-primary sm:text-base text-sm font-medium'>
                        {t("contact.e-mail")}
                    </h6>
                    <div className='text-black font-semibold sm:text-sm text-xs'>
                        <p>contactinfo@alarkkan.com</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-center justify-center '>
                    <div className='bg-lightBlue sm:w-[80px] w-[50px] h-[50px] sm:h-[80px] rounded-md flex items-center justify-center'>
                        <img className='md:w-[50px] sm:w-[40px] sm:h-[50px] w-[30px] h-[30px]' src="/svgs/map.svg" alt="" />
                    </div>
                    <h6 className='text-primary sm:text-base text-sm font-medium'>
                    {t("contact.address")}
                    </h6>
                    <div className='text-black font-semibold sm:text-sm text-xs text-center'>
                        <p>Halima Al Sadiah St, <br /> Al Rawdah District, <br /> Dammam ,KSA</p>
                    </div>
                </div>
            </div>
            <div className='flex-[0.7] relative z-50 h-full flex justify-center'>
                <div className='lg:w-[450px] w-[400px] h-full bg-primary rounded-lg py-6 pb-8 px-6'>
                    <h6 className='text-center font-semibold text-lg text-pure'>Get In Touch</h6>
                    <form className='mt-6 flex flex-col gap-7'>
                        <InputField 
                        label='Name'
                        value={name}
                        setValue={setName}
                        /> 
                        <InputField 
                        label='Company'
                        value={company}
                        setValue={setCompany}
                        />
                        <InputField 
                        label='Email'
                        value={email}
                        setValue={setEmail}
                        />
                        <InputField 
                        label='Name'
                        value={telephone}
                        setValue={setTelephone}
                        />
                        <InputField 
                        label='Additional Content'
                        value={content}
                        setValue={setContent}
                        />
                        <div className='flex items-end justify-end mt-8'>
                            <button className="btn-white">Submit</button>
                        </div>
                    </form>
                </div>
                <div className='w-[400px] h-full sm:block hidden absolute md:-top-20 -top-8 right-0 -z-10 '>
                    <img src="/images/contactBgMask.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ContactForm