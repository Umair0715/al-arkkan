import React, { useState } from 'react'

const Login = ({ t }) => {
    const [showPassword , setShowPassword] = useState(false);

    return (
        <div>
            <form className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <label>
                        {t("login.emailLabel")}
                    </label>
                    <input 
                    type="text" 
                    placeholder='example@gmail.com'
                    className='py-2 px-3 rounded-md text-dark focus:border-primary border outline-none'
                    />
                </div>
                <div className='flex flex-col gap-2 relative'>
                    <label>
                        {t("login.pass")}
                    </label>
                    <input 
                    type={`${showPassword ? 'text' : 'password'}`} 
                    placeholder='**********'
                    className='py-2 px-3 rounded-md text-dark focus:border-primary border outline-none'
                    />
                    <div className='absolute right-2 top-[55%] cursor-pointer w-fit'>
                        {
                            showPassword 
                            ? 
                                <img 
                                src="/svgs/eyeInvisible.svg" 
                                alt="Eye" 
                                className='w-[24px] ' 
                                onClick={() => setShowPassword(false)}
                                />
                            :
                                <img 
                                src="/svgs/eyeVisible.svg" 
                                alt="Eye" 
                                className='w-[24px]'
                                onClick={() => setShowPassword(true)} 
                                />

                        }
                    </div>
                </div>
                <div className='flex items-cente justify-between mt-4'>
                    <div className='flex items-center gap-2 text-sm'>
                        <input type="checkbox" id='rememberMe'/>
                        <label htmlFor="rememberMe">
                            {t("login.rememberMe")}
                        </label>
                    </div>
                    <div className='text-grayText text-sm cursor-pointer'>
                        {t("login.forget")}
                    </div>
                </div>
                <div className='mt-6'>
                    <button className="btn-primary w-full">
                        {t("login.title")}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login