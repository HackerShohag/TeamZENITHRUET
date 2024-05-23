'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '@/styles/swiper.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Image } from '@nextui-org/image';


export default function SlideCard() {

    const images = [
        '/gallery/nasa1.jpg',
        '/gallery/fkdc1.jpg',
        '/gallery/chegRepublic1.jpg',
        '/gallery/nasa2.jpg',
        '/gallery/chegRepublic2.jpg',
        '/gallery/recruitment1.jpg',
        '/gallery/fkdc2.jpg',
        '/gallery/fkdc3.jpg',
        '/gallery/nasa3.jpg',
        '/gallery/seminar2.jpg',
        '/gallery/nasa6.jpg',
        '/gallery/chegRepublic3.jpg',
        '/gallery/fkdc4.jpg',
        '/gallery/nasa4.jpg',
        '/gallery/seminar1.jpg',
        '/gallery/nasa5.jpg',
        '/gallery/fkdc5.jpg',
    ];

    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 60,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                className="mySwiper"
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {
                    images.map((image, index) => (
                        <SwiperSlide key={index} className='overflow-hidden'>
                            <Image src={image} alt="slide" radius='none' className='h-full' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}