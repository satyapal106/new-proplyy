'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';
import Image from 'next/image';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="creative-testimonial--slider" 
      style={{
        backgroundImage: 'url(https://imgpanda.com/upload/ib/2Tgg58L106.png)',
      }}>
      <div className="testimonial-inner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="cursor-scale testimonial-heading text-center">
                Testimonials
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                loop={true}
                centeredSlides={true}
                autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                }}
                navigation={true}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="swiper-slide--inner text-center">
                    <div className="slide-avatar mb-3">
                      <Image
                        src="/assets/images/author/author-1.png"
                        width={150}
                        height={150}
                        alt="Avatar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-detail">
                      {/* <Image
                        src="/assets/images/author/author-2.png"
                        width={100}
                        height={100}
                        alt="Company Logo"
                        className="img-fluid mb-3"
                      /> */}
                      <p className="testimonial-text">
                        Their team is easy to work with and helped me make
                        amazing websites in a short amount of time. Thanks
                        guys for all your hard work. Trust us, we looked for a
                        very long time.
                      </p>
                      <span className="testimonial-author">
                       {` Herman Miller, Monday`}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide--inner text-center">
                    <div className="slide-avatar mb-3">
                      <Image
                        src="/assets/images/author/author-4.png"
                        alt="Avatar"
                        width={150}
                        height={150}
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-detail">
                      {/* <Image
                        src="/assets/images/author/author-5.png"
                        alt="Company Logo"
                        width={100}
                        height={100}
                        className="img-fluid mb-3"
                      /> */}
                      <p className="testimonial-text">
                        Their team is easy to work with and helped me make
                        amazing websites in a short amount of time. Thanks
                        guys for all your hard work. Trust us, we looked for a
                        very long time.
                      </p>
                      <span className="testimonial-author">
                        Matthew Taylor, Invision
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide--inner text-center">
                    <div className="slide-avatar mb-3">
                      <Image
                        src="/assets/images/author/author-6.png"
                        width={150}
                        height={150}
                        alt="Avatar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-detail">
                      {/* <Image
                        src="/assets/images/author/author-3.png"
                        alt="Company Logo"
                        width={100}
                        height={100}
                        className="img-fluid mb-3"
                      /> */}
                      <p className="testimonial-text">
                        Their team is easy to work with and helped me make
                        amazing websites in a short amount of time. Thanks
                        guys for all your hard work. Trust us, we looked for a
                        very long time.
                      </p>
                      <span className="testimonial-author">
                        Leonel Mooney, Logitech
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Add more SwiperSlide components as needed */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
