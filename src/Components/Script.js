import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MyComponent = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const videoSources = ['video1.mp4', 'video2.mp4', 'video3.mp4'];
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setSearchActive(false);
      setMenuActive(false);
      setLoginActive(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <button
        id="search-btn"
        className={searchActive ? 'fa-times' : ''}
        onClick={() => setSearchActive(!searchActive)}
      >
        Search
      </button>

      <div className={`search-bar-container ${searchActive ? 'active' : ''}`}>
        {/* Search bar content */}
      </div>

      <button
        id="menu-bar"
        className={menuActive ? 'fa-times' : ''}
        onClick={() => setMenuActive(!menuActive)}
      >
        Menu
      </button>

      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        {/* Navbar content */}
      </nav>

      <button id="login-btn" onClick={() => setLoginActive(true)}>
        Login
      </button>

      <div className={`login-form-container ${loginActive ? 'active' : ''}`}>
        <button id="form-close" onClick={() => setLoginActive(false)}>
          Close
        </button>
        {/* Login form content */}
      </div>

      <div className="controls">
        {videoSources.map((src, i) => (
          <button
            key={i}
            className={i === activeVideoIndex ? 'active' : ''}
            onClick={() => setActiveVideoIndex(i)}
          >
            Video {i + 1}
          </button>
        ))}
      </div>

      <video id="video-slider" src={videoSources[activeVideoIndex]} controls />

      <Swiper
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>Review 1</SwiperSlide>
        <SwiperSlide>Review 2</SwiperSlide>
        <SwiperSlide>Review 3</SwiperSlide>
      </Swiper>

      <Swiper
        className="brand-slider"
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          450: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          991: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
      >
        <SwiperSlide>Brand 1</SwiperSlide>
        <SwiperSlide>Brand 2</SwiperSlide>
        <SwiperSlide>Brand 3</SwiperSlide>
        <SwiperSlide>Brand 4</SwiperSlide>
        <SwiperSlide>Brand 5</SwiperSlide>
      </Swiper>
    </>
  );
};

export default MyComponent;
