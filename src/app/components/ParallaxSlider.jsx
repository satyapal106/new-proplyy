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
import './ParallaxSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const ParallaxSlider = () => {
  const slides = [
    {
      image: "/assets/images/slider/1.jpg",
      heading: ["Your Property", "Our Priority"],
      description: "Property Management Services You Can Trust",
      link: "https://www.fiverr.com/aliali44/develop-or-customize-a-wordpress-theme"
    },
    {
      image: "/assets/images/slider/2.jpg",
      heading: ["Unlock Your", "Wealth Potential"],
      description: "With Expert Investment Management",
      link: "https://www.fiverr.com/aliali44/develop-or-customize-a-wordpress-theme"
    },
    {
      image: "/assets/images/slider/3.jpg",
      heading: ["Transforming", "Investments"],
      description: "Into success stories with our Comprehensive Management Solutions",
      link: "https://www.fiverr.com/aliali44/develop-or-customize-a-wordpress-theme"
    },
    {
      image: "/assets/images/slider/4.jpg",
      heading: ["Delivering creative", "digital products"],
      description: "We're a fully dedicated corporate service agency collaborating with brands all over the world.",
      link: "https://www.fiverr.com/aliali44/develop-or-customize-a-wordpress-theme"
    }
  ];

  return (
    <section className="creative-parallax--slider">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay, Parallax]}
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            parallax
            className="parallax-slider slider-wrap col-12"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="swiper-slide--inner text-left text-white justify-content-start">
                  <div className="slide-detail">
                    <div className="slide-main--heading mb-3">
                      <div className="from-left">{slide.heading[0]}</div>
                      <div className="from-right">{slide.heading[1]}</div>
                    </div>
                    <div className="slide-des mb-3">
                      <p className='slider-para'>{slide.description}</p>
                    </div>
                    <div className="slide-cta mb-3">
                      <a href={slide.link} className="slide-btn gradient-btn btn btn-primary">
                        Read More <span><FontAwesomeIcon icon={faArrowRight} /></span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
