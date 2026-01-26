'use client';

import React from 'react';
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

interface SlideCardProps {
    images: string[];
}

export default function SlideCard({ images }: SlideCardProps) {

    return (
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
            className="swiper-slide-card"
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
    )
}