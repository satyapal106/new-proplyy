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
            <h2 className="service-title text-center">Our Services</h2>
            {/* <p className="service-para">
              We create innovative strategies to enable transformative growth
            </p> */}
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
                  src="/assets/images/services/5.jpg" 
                  width={500}
                  height={250}
                  alt="Service 1" 
                  />
                  <div className="newsCaption">
                    <h3 className="newsCaption-title">Property Management</h3>
                    <p className="newsCaption-content">With extensive experience serving top developers and investors, we use a tech-driven model to streamline real estate transactions and maximize property value.</p>
                    <p><a className="newsCaption-link" href="#">Read More</a></p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="newsCard news-Slide-up">
                  <Image src="/assets/images/services/6.jpg"
                   width={500}
                   height={250} 
                  alt="Service 2" />
                  <div className="newsCaption">
                    <h3 className="newsCaption-title">Finance Management</h3>
                    <p className="newsCaption-content">Offers comprehensive financial advice for property seekers, guiding you through loan approvals, documentation, and risks, while managing paperwork and educating you on the loan process for a complete financial solution.</p>
                    <p><a className="newsCaption-link" href="#">Read More</a></p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="newsCard news-Slide-up">
                  <Image 
                    src="/assets/images/services/7.jpg" 
                    width={500}
                    height={250}
                    alt="Service 3" 
                  />
                  <div className="newsCaption">
                    <h3 className="newsCaption-title">Legal Management</h3>
                    <p className="newsCaption-content">Offers expert property advice, thorough document verification, and RERA and authority approvals, ensuring you make informed investment decisions.</p>
                    <p><a className="newsCaption-link" href="#">Read More</a></p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="newsCard news-Slide-up">
                  <Image 
                  src="/assets/images/services/8.jpg" 
                  width={500}
                  height={250}
                  alt="Service 4" 
                  />
                  <div className="newsCaption">
                    <h3 className="newsCaption-title">Investment Management</h3>
                    <p className="newsCaption-content">We offer a comprehensive advisory service covering equity, debt, managed accounts, and asset management, with a disciplined approach and expert knowledge to deliver optimal, risk-adjusted returns.</p>
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
