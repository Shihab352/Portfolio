import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFlip } from 'swiper/modules';
import Marquee from "react-fast-marquee";

import backgroundImage from '../assets/top-view-workspace-with-copy-space-succulent.jpg';
import backgroundImage1 from '../assets/black-frame-with-copy-space-top-view.jpg';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip]}
            spaceBetween={50}
            effect="flip"
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div
                    className="hero min-h-screen w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className=" text-center  text-white space-y-4">
                        <h1 className="text-6xl font-bold animate-bounce ">Hi , I am  Sazzadul Karim</h1>
                        <p className="mt-4 text-2xl">
                            <Marquee>
                                A passionate programmer and a Learner.
                            </Marquee></p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="hero min-h-screen bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage1})` }}
                >
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className=" text-center text-white">
                        <h1 className="text-6xl font-roboto font-bold animate-bounce">Explore My Projects</h1>
                        <p className="mt-4 text-2xl font-lato"> <Marquee>
                           Discover What I can Build For You
                        </Marquee></p>
                        <button className=' mt-5 btn text-lg font-lato text-white 
                   bg-gradient-to-r from-slate-700 from-10% via-slate-900 via-30% to-black to-90% hover:from-black  hover:to-slate-900 '><Link to={'/project'}>See My Project</Link></button>
                    </div>
                </div>
            </SwiperSlide>


        </Swiper>

    );
};

export default Slider;