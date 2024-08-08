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
                The Building Blocks For Trust & Love
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
                        src="/assets/images/author/testi1.jpeg"
                        width={200}
                        height={200}
                        alt="Avatar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-detail">
                      <span className="testimonial-author">
                        Deep Prakash Rawat
                      </span>
                      <p className="testimonial-text">
                        Proplyy worked like professionals and guided us right from the beginning till the final possession of the property. Being transparent about their business processes, the team offered simple solutions to what we were looking for as a new homebuyer. Our journey with them was very comfortable without any hassle.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide--inner text-center">
                    <div className="slide-avatar mb-3">
                      <Image
                        src="/assets/images/author/testi2.jpeg"
                        alt="Avatar"
                        width={150}
                        height={150}
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-detail">
                      <span className="testimonial-author">
                        Pankaj Bhadouria
                      </span>
                      <p className="testimonial-text">
                        Responding quickly to our queries from the beginning until closing the deal, the team managed everything with utmost professionalism. With their helpful suggestion, we could choose the house that we always wanted for our family. We highly recommend Proplyy and they should be your first choice when looking to buy a residential or commercial property in Lucknow.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide--inner text-center">
                    <div className="slide-avatar mb-3">
                      <Image
                        src="/assets/images/author/testi3.jpeg"
                        width={150}
                        height={150}
                        alt="Avatar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-detail">
                      <span className="testimonial-author">
                        Saket Kesarwani
                      </span>
                      <p className="testimonial-text">
                        They have in-depth knowledge about the neighbourhoods in Lucknow. The skilled team helped us buy our dream home in a prime location and that too in our budget. Without a doubt, we can trust Proplyy for the best real estate services and ethical monetary transactions.
                      </p>

                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide--inner text-center">
                    <div className="slide-avatar mb-3">
                      <Image
                        src="/assets/images/author/testi4.jpeg"
                        width={150}
                        height={150}
                        alt="Avatar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-detail">
                      <span className="testimonial-author">
                        Hemant Arora
                      </span>
                      <p className="testimonial-text">
                        Amazing client service and professionalism. Not only they shortlist the right kind of projects for you but also ensure you are taking the best decision based on facts. Truly unbiased and research based opinions is what you will get from them. Big thanks to Proplyy for their sincere efforts to finalize the right property for us.
                      </p>

                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide--inner text-center">
                    <div className="slide-avatar mb-3">
                      <Image
                        src="/assets/images/author/testi5.jpeg"
                        width={150}
                        height={150}
                        alt="Avatar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-detail">
                      <span className="testimonial-author">
                        Anshul Srivastava
                      </span>
                      <p className="testimonial-text">
                        I would like to thank the entire team of Proplyy, for helping me find the perfect property according to my requirement & budget. In Proplyy i have found the one stop property destination. One word that describes them best is "Trustworthy".
                      </p>

                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide--inner text-center">
                    <div className="slide-avatar mb-3">
                      <Image
                        src="/assets/images/author/testi6.jpeg"
                        width={150}
                        height={150}
                        alt="Avatar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-detail">
                      <span className="testimonial-author">
                        Mohammad Faiyaz Ahmad
                      </span>
                      <p className="testimonial-text">
                        I recently had my Plot sale arranged through Proplyy. They took complete responsibility for property management that I would have probably not done by myself owing to my busy work schedule. They laid realistic expectations, guided the purchaser and us on the loan transfer option & process that made the transaction rather fast and saved the hassle of re-approvals of documents by bank. The terms & conditions laid by them were quite candid and they had good clarity on documentation work that's most essential for managing real estate business. Thanks Proplyy and wish you All the very best !-
                      </p>

                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
