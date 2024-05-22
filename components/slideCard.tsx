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
        '/gallery/1.jpg',
        '/gallery/2.jpg',
        '/gallery/3.jpg',
        '/gallery/1.jpg',
        '/gallery/2.jpg',
        '/gallery/3.jpg',
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
                        <SwiperSlide key={index}>
                            <Image src={image} alt="slide" radius='none' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}