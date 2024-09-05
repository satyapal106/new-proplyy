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
      heading: ["Bringing Transparency", "to Business"],
      description: "Building credibility, increasing customer loyalty, and creating empowerment.",
      link: "#"
    },
    {
      image: "/assets/images/slider/2.png",
      heading: ["Delivering Excellence", "to Real Estate"],
      description: "Understanding expectations and offering customised solutions to clients.",
      link: "#"
    },
    {
      image: "/assets/images/slider/3.jpg",
      heading: ["A Key Milestone in our", "Growth Story"],
      description: "Delighted to welcome 360 ONE, our equity investor!",
      link: "#"
    },
    {
      image: "/assets/images/slider/4.jpg",
      heading: ["Fuelling Growth ", "through Innovation"],
      description: "Leveraging new technologies to transform Indian real estate.",
      link: "#"
    }
  ];

  return (
    <section className="creative-parallax--slider">
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay, Parallax]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            parallax
            className="parallax-slider slider-wrap col-12"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="d-flex align-items-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="swiper-slide--inner text-left justify-content-start">
                  <div className="slide-detail">
                    <div className="slide-main--heading">
                      <div className="from-left">{slide.heading[0]}</div>
                      <div className="from-right">{slide.heading[1]}</div>
                    </div>
                    <div className="slide-des">
                      <p className='slider-para'>{slide.description}</p>
                    </div>
                    <div className="slide-cta">
                      <a href={slide.link} className="slide-btn gradient-btn btn btn-primary">
                        Discover our Services <span><FontAwesomeIcon icon={faArrowRight} /></span>
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
