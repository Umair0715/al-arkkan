import ContactForm from 'components/contactForm';
import React, { useRef , useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Contact = ({ t }) => {
    const formRef = useRef(null);

    
    useEffect(() => {
        const el = formRef.current;
        gsap.fromTo( el , 
        { y : "20%" , opacity : 0 } , { y : 0 , opacity : 1 , duration : 1  , 
            scrollTrigger : {
                trigger : el , 
                start : 'top 70%'
            }
        })
    }, []);

    return (
        <div className='py-12 h-full relative'>
            <div className='lg:w-[85%] w-[95%] min-h-[90vh] h-full  mx-auto'>
                <h3 className='text-4xl font-semibold leading-[1.2]'>We Are Always <br /> Close To You</h3>
                <div className='lg:w-[80%] sm:w-[92%] w-[100%] mx-auto' ref={formRef}>
                    <ContactForm t={t} />
                </div>
            </div>   
        </div>
    )
}

export default Contact