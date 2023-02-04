import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide , pagination } from "swiper/react";
import styles from './home.module.css';



const Courses = ({ t }) => {

    return (
        <div className="py-12">
            <div className='text-center'>
                <h3 className='text-4xl font-bold'>
                    {t("course.mainHeading")}
                </h3>
                <p className='text-grayText mt-6'>
                    {t("course.subHeading")}
                </p>
            </div>
            <div className={`${styles.courseSwiperContainer} w-[85%] mx-auto mt-12`} >
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints = {{
                        1050 : {
                            slidesPerView : 3
                        } ,
                        700 : {
                            slidesPerView : 2
                        },
                        200 : {
                            slidesPerView : 1
                        }
                    }}
                    className={styles.courseSwiper}
                >
                    {
                        [...Array(6).keys()].map((item , i) => (
                            <SwiperSlide key={i}>
                                <div>
                                    <div className="w-full h-[180px] rounded-tl-[25px] rounded-tr-[25px] py-3 px-2 flex flex-col justify-between" style={{
                                        background : 'url(/images/courseBg.jpg)',
                                        backgroundSize : 'cover'
                                    }}>
                                        <div className="flex items-end justify-end">
                                            <div className="bg-pure px-2 py-1.5 flex items-center gap-2 text-sm rounded-md font-medium">
                                                <span>
                                                 {t("course.intermediate")}
                                                </span>
                                                <img src="/svgs/levels.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between bg-gray-100 bg-opacity-80 sm:mx-4 text-sm font-normal px-2 rounded-sm py-1.5">
                                            <div  className="flex gap-1">
                                                <img src="/svgs/smLocation.svg" alt="" />
                                                <span>
                                                    {t("course.elKhobar")}
                                                </span>
                                            </div>
                                            <div  className="flex gap-1">
                                                <img src="/svgs/online.svg" alt="" />
                                                <span>
                                                    {t("course.online")}
                                                </span>
                                            </div>
                                            <div  className="flex gap-1">
                                                <img src="/svgs/lang.svg" alt="" />
                                                <span>
                                                    {t("course.lang")}
                                                </span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="w-full border rounded-bl-lg rounded-br-lg">
                                        <div className="sm:p-4 px-2 py-4 flex items-center justify-between gap-4 border-b">
                                            <div className="flex-[0.8]">
                                                <h6 className="text-base font-bold">
                                                    {t("course.title")}    
                                                </h6>
                                                <p className="text-[13px] text-grayText mt-1">
                                                    {t("course.desc")}
                                                </p>
                                            </div>
                                            <div className="flex-[0.2] bg-lightBlue px-3 py-2 rounded-md text-primary text-center font-medium">
                                                <p>Jan</p>
                                                <p className="text-2xl font-bold">24</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-around text-sm sm:p-4 px-2 py-4 border-b">
                                            <div className="flex flex-col gap-1 items-center text-grayText">
                                                <img src="/svgs/clock.svg" alt="Clock"/>
                                                <p>100 {t("course.hours")}</p>
                                            </div>
                                            <div className="flex flex-col gap-1 items-center text-grayText">
                                                <img src="/svgs/students.svg" alt="Clock"/>
                                                <p>20 {t("course.students")}</p>
                                            </div>
                                            <div className="flex flex-col gap-1 items-center text-grayText">
                                                <img src="/svgs/book.svg" alt="Clock"/>
                                                <p>10 {t("course.session")}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-4">
                                            <img src="/images/smAvatar.png" alt="Avatar" />
                                            <div>
                                                <p className="text-sm font-semibold">Roynaldo Jr</p>
                                                <p className="text-[10px] text-grayText">Data Science</p>
                                            </div>
                                        </div>
                                        <div className="py-6 sm:px-4 px-2 bg-gray-100 flex items-center justify-between rounded-bl-lg rounded-br-lg">
                                            <div>
                                                <button className="btn-primary">
                                                {t("course.enrollNow")}
                                                </button>
                                            </div>
                                            <p className="text-xl font-bold">180 <span className="text-base text-grayText font-medium">/SAR</span></p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    {/* <div className="swiper-button-next"><i className="uil uil-angle-right"></i></div> */}
                </Swiper>
                <div className="flex items-center justify-center mt-4">
                    <button className="btn-secondary flex items-center gap-2">
                        <span>
                            {t("course.viewMore")}
                        </span>
                        <img src="/svgs/rightAngle.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Courses