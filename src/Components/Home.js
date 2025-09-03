import React, { useState } from 'react';

const videos = [
  "https://res.cloudinary.com/dh549anka/video/upload/v1756236378/video1_aljf6e.mp4",
  "https://res.cloudinary.com/dh549anka/video/upload/v1756236310/video2_eg7xnb.mp4",
  "https://res.cloudinary.com/dh549anka/video/upload/v1756236390/video3_h8vudu.mp4",
  "https://res.cloudinary.com/dh549anka/video/upload/v1756236339/video4_dorpkv.mp4",
  "https://res.cloudinary.com/dh549anka/video/upload/v1756236348/video5_y7sqks.mp4",
  "https://res.cloudinary.com/dh549anka/video/upload/v1756236369/video6_dkz3gw.mp4",
];

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <section className="home" id="home">
      <div className="content">
        <h3>adventure is worthwhile</h3>
        <p>discover new places with us, adventure awaits</p>
        <a href="#" className="btn">discover more</a>
      </div>

      <div className="controls">
        {videos.map((src, index) => (
          <span
            key={index}
            className={`vid-btn ${currentVideo === src ? 'active' : ''}`}
            onClick={() => setCurrentVideo(src)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      <div className="video-container">
        <video
          src={currentVideo}
          id="video-slider"
          loop
          autoPlay
          muted
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
};

export default Home;
