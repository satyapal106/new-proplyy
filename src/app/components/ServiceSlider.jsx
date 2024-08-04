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
import './ServiceSlider.css';

const ServiceSlider = () => {
  return (
    <section className="service-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="service-title cursor-scale">Services</h2>
            <p className="service-para">
              We create innovative strategies to enable transformative growth
            </p>
          </div>

          <div className="col-md-12">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              spaceBetween={30}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={true}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="swiper-container"
            >
              <SwiperSlide>
                <div className="newsCard news-Slide-up">
                  <Image 
                  src="/assets/images/house/our-properties-1.jpg" 
                  width={500}
                  height={250}
                  alt="Service 1" 
                  />
                  <div className="newsCaption">
                    <h3 className="newsCaption-title">Title 1</h3>
                    <p className="newsCaption-content">Blurb to get reader hooked.</p>
                    <p><a className="newsCaption-link" href="#">Read More</a></p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="newsCard news-Slide-up">
                  <Image src="/assets/images/house/our-properties-1.jpg"
                   width={500}
                   height={250} 
                  alt="Service 2" />
                  <div className="newsCaption">
                    <h3 className="newsCaption-title">Title 2</h3>
                    <p className="newsCaption-content">Blurb to get reader hooked.</p>
                    <p><a className="newsCaption-link" href="#">Read More</a></p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="newsCard news-Slide-up">
                  <Image 
                    src="/assets/images/house/our-properties-1.jpg" 
                    width={500}
                    height={250}
                    alt="Service 3" 
                  />
                  <div className="newsCaption">
                    <h3 className="newsCaption-title">Title 3</h3>
                    <p className="newsCaption-content">Blurb to get reader hooked.</p>
                    <p><a className="newsCaption-link" href="#">Read More</a></p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="newsCard news-Slide-up">
                  <Image 
                  src="/assets/images/house/our-properties-1.jpg" 
                  width={500}
                  height={250}
                  alt="Service 4" 
                  />
                  <div className="newsCaption">
                    <h3 className="newsCaption-title">Title 4</h3>
                    <p className="newsCaption-content">Blurb to get reader hooked.</p>
                    <p><a className="newsCaption-link" href="#">Read More</a></p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;
