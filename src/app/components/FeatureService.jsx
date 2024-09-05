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
import { faAngleRight, faCheck} from '@fortawesome/free-solid-svg-icons';

const FeatureService = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const properties = [
    {
      id: 1,
      title: 'Omaxe City',
      area: '534 sqft to 1168 sqft',
      price: 'Price starting from 37 Lahs',
      type:'Plots',
      image: '/assets/images/house/Omaxe.jpg',
      points: ['Spacious living room', 'Modern kitchen', 'Large garden'],
    },
    {
      id: 2,
      title: 'Ansal',
      area: '774 sqft to 2225 sqft',
      price:'Price starting from 27 Lahs',
      type:'Plots',
      image: '/assets/images/house/Ansal.jpg',
      points: ['Beachfront view', 'Private pool', 'Luxurious design'],
    },
    {
      id: 3,
      title: 'Bliss Delight',
      area: '2bhk Area: 1240 sqft',
      price:'Price starting from 57 Lahs',
      type:'Flats',
      image: '/assets/images/house/Bliss-Delight.jpg',
      points: ['City center location', 'Rooftop terrace', 'Gym and sauna'],
    },
    {
      id: 4,
      title: 'Urban Woods',
      area: '3 bhk Area: 1560 sqft',
      price: "Price starting from 85 Lahs",
      type:'Flats',
      image: '/assets/images/house/Urban-Woods.jpg',
      points: ['Eco-friendly features', 'Open-plan layout', 'Scenic surroundings'],
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
            <h2 className="text-center text-white">Latest in Real Estate Projects</h2>
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
                  slidesPerView: 3,
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
                          <li><Image src="/assets/images/logo/location.png" width={30} height={30} alt="location"/> Lucknow</li>
                          <li></li>
                          <li><Image src="/assets/images/logo/building.png" width={30} height={30} alt="building"/> {property.area} </li>
                        </ul>
                      </div>
                      <div className="card-footer">
                        <button type="button" className="btn btn-info">
                          Read More <FontAwesomeIcon icon={faAngleRight} aria-hidden="true" />
                        </button>
                        {/* <div
                          className="card-button"
                          onClick={() => openModal(property.points)}
                        >
                          <FontAwesomeIcon icon={faEye} aria-hidden="true" />
                        </div> */}
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
