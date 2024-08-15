'use client';
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, Parallax, EffectCoverflow, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';
import Image from 'next/image';
import './BlogSlider.css';

const BlogSlider = () => {

    return (
        <>
            <section className='blog-section'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <h2 className="text-center">Blog</h2>
                        </div>
                    </div>
                </div>

                <main className="container">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, Autoplay, Parallax, EffectCoverflow, Keyboard, Mousewheel]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        // autoplay={{
                        //     delay: 3000,
                        //     disableOnInteraction: false,
                        // }}
                        navigation
                        coverflowEffect={{
                            // rotate: 0,
                            // stretch: 0,
                            // depth: 100,
                            // modifier: 3,
                            // slideShadows: true
                        }}
                        keyboard={{ enabled: true }}
                        // mousewheel={{ thresholdDelta: 70 }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 1
                            },
                            1024: {
                                slidesPerView: 3
                            },
                            1560: {
                                slidesPerView: 3
                            }
                        }}
                        className="swiper-item"
                    >
                        <SwiperSlide className="swiper-blog swiper-slide--one">
                            <div>
                                <h3>NRI Investment in Indian Real Estate – A new phenomena or old trend?</h3>
                                <p>The last few years have witnessed a huge fluctuation in the Indian rupee, which has...</p>
                                <Link href="#" target="_blank" rel="noopener noreferrer">Read More</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-blog swiper-slide--two">
                            <div>
                                <h3>Tier 2 & 3 Cities – Rapidly Becoming Growth Engines for Indian Real Estate</h3>
                                <p>While the pandemic is a topic all of us want to completely wipe out from...</p>
                                <Link href="#" target="_blank" rel="noopener noreferrer">Read More</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-blog swiper-slide--three">
                            <div>
                                <h3>Benefits of Second Home</h3>
                                <p>The pandemic made us realize the importance of investing in real estate. While stocks, gold,... </p>
                                <Link href="#" target="_blank" rel="noopener noreferrer">Read More</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-blog swiper-slide--four">
                            <div>
                                <h3>All You Need To Know About Themed Homes</h3>
                                <p>With people realising the importance of human and environmental well-being, wellness-themed and smart homes have... </p>
                                <Link href="#" target="_blank" rel="noopener noreferrer">Read More</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-blog swiper-slide--five">
                            <div>
                                <h3>Retail Real Estate in India – A strong comeback and here to stay </h3>
                                <p>We have always given credit to the increase in per capita of the middle-class consumer...</p>
                                <Link href="#" target="_blank" rel="noopener noreferrer">Read More</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-blog swiper-slide--six">
                            <div>
                                <h3>Real Estate Investment in India Rose to All-Time High in 2022 </h3>
                                <p>At $7.8 billion, real estate investment in India rose to an all-time high in 2022.This...</p>
                                <Link href="#" target="_blank" rel="noopener noreferrer">Read More</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-blog swiper-slide--seven">
                            <div>
                                <h3>Is Ready-To-Move-In House Better Than Investing In An Under-Construction Property?</h3>
                                <p>When planning to buy a house, the most important decision to make is to whether...</p>
                                <Link href="#" target="_blank" rel="noopener noreferrer">Read More</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-blog swiper-slide--eight">
                            <div>
                                <h3>Pros and Cons Of Investing In Commercial Real Estate </h3>
                                <p>Commercial real estate has been one of the popular asset classes in terms of investment...</p>
                                <Link href="#" target="_blank" rel="noopener noreferrer">Read More</Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </main>
            </section>
        </>

    );
};

export default BlogSlider;
