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
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
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
                                <h3>NRI Investment in Indian Real Estate</h3>
                                <p>A new phenomena or old trend?</p>
                                <Link href="#" target="_blank" rel="noopener noreferrer">Read More</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-blog swiper-slide--two">
                            <div>
                                <h3>Tier 2 & 3 Cities</h3>
                                <p>Rapidly Becoming Growth Engines for Indian Real Estate</p>
                                <Link href="#" target="_blank" rel="noopener noreferrer">Read More</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-blog swiper-slide--three">
                            <div>
                                <h3>Benefits of Second Home</h3>
                                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                <Link href="#" target="_blank" rel="noopener noreferrer">Read More</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-blog swiper-slide--four">
                            <div>
                                <h3>All You Need To Know About Themed Homes</h3>
                                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                <Link href="#" target="_blank" rel="noopener noreferrer">Read More</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-blog swiper-slide--five">
                            <div>
                                <h3>Retail Real Estate in India </h3>
                                <p>A strong comeback and here to stay</p>
                                <Link href="#" target="_blank" rel="noopener noreferrer">Read More</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-blog swiper-slide--five">
                            <div>
                                <h3>Real Estate Investment in India Rose to All </h3>
                                <p>Time High in 2022</p>
                                <Link href="#" target="_blank" rel="noopener noreferrer">Read More</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-blog swiper-slide--five">
                            <div>
                                <h3>Is Ready-To-Move-In House Better Than Investing In An Under </h3>
                                <p>Construction Property?</p>
                                <Link href="#" target="_blank" rel="noopener noreferrer">Read More</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-blog swiper-slide--five">
                            <div>
                                <h3>Pros and Cons Of Investing In Commercial Real Estate </h3>
                                {/* <p>Construction Property?</p> */}
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
