import React from 'react'

const InputField = ({ label , value , setValue }) => {
    return (
        <div className="relative z-0">
            <input 
            type="text" 
            className="block py-2.5  px-0 w-full text-sm text-pure bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-pure peer" 
            placeholder=" " 
            value={value}
            onChange={e => setValue(e.target.value)}
            />
            <label 
            className="absolute text-base font-medium text-gray-100 duration-300 transform -translate-y-6  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pure peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.9] peer-focus:-translate-y-6">{label}</label>
        </div>
    )
}

export default InputField