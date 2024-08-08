'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';
import Image from 'next/image';
import './FeatureService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCheck, faMapMarker, faBuilding } from '@fortawesome/free-solid-svg-icons';

const FeatureService = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const properties = [
    {
      id: 1,
      title: 'Property 1',
      description: 'Property 1 description and details',
      image: '/assets/images/house/our-properties-1.jpg',
      points: ['Spacious living room', 'Modern kitchen', 'Large garden'],
    },
    {
      id: 2,
      title: 'Property 2',
      description: 'Property 2 description and details',
      image: '/assets/images/house/our-properties-2.jpg',
      points: ['Beachfront view', 'Private pool', 'Luxurious design'],
    },
    {
      id: 3,
      title: 'Property 3',
      description: 'Property 3 description and details',
      image: '/assets/images/house/our-properties-3.jpg',
      points: ['City center location', 'Rooftop terrace', 'Gym and sauna'],
    },
    {
      id: 4,
      title: 'Property 4',
      description: 'Property 4 description and details',
      image: '/assets/images/house/our-properties-4.jpg',
      points: ['Eco-friendly features', 'Open-plan layout', 'Scenic surroundings'],
    },
    {
      id: 5,
      title: 'Property 5',
      description: 'Property 5 description and details',
      image: '/assets/images/house/our-properties-5.jpg',
      points: ['Historic architecture', 'Wine cellar', 'Library and study'],
    },
    {
      id: 6,
      title: 'Property 6',
      description: 'Property 6 description and details',
      image: '/assets/images/house/our-properties-3.jpg',
      points: ['Gated community', 'Multi-car garage', 'Home theater'],
    },
  ];

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <section className="featured-service">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-3">
            <h2 className="text-center">Latest in Real Estate Projects</h2>
          </div>
          <div className="col-sm-12">
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
                  slidesPerView: 4,
                },
              }}
            >
              {properties.map((property) => (
                <SwiperSlide key={property.id}>
                  <div className="item">
                    <div className="card">
                      <div className="card-img">
                        <div className="zoom-effect">
                          <Image
                            className="img-responsive"
                            src={property.image}
                            width={500}
                            height={300}
                            alt={property.title}
                          />
                        </div>
                      </div>
                      <div className="card-info">
                        <h3 className="text-title">{property.title}</h3>
                        {/* <p className="text-body">{property.description}</p> */}
                        <ul>
                          <li><FontAwesomeIcon icon={faMapMarker} aria-hidden="true" /> Lucknow</li>
                          <li><FontAwesomeIcon icon={faBuilding} aria-hidden="true" /> 2BHK, 3BHK, 4BHK</li>
                        </ul>
                      </div>
                      <div className="card-footer">
                        <button type="button" className="btn btn-info">
                          Read More
                        </button>
                        <div
                          className="card-button"
                          onClick={() => openModal(property.points)}
                        >
                           <FontAwesomeIcon icon={faEye} aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {isModalOpen && modalContent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <ul>
              {modalContent.map((point, index) => (
                <li key={index}> <FontAwesomeIcon icon={faCheck} aria-hidden="true" /> {point} </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeatureService;
